module.exports = mongoose => {
	const UserSchema = new mongoose.Schema(
		{
			name: String,
			email: String,
			emailVerifiedAt: Date,
			password: String,
			position: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Position'
			},
			lastLogin: Date,
			lastIp: String,
			isActive: Boolean,
			groups: String,
			identity: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Identity'
			},
			staff: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Staff'
			},
			contactProfile: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'ContactProfile'
			},
			address: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Address'
			},
			role: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Role'
			}, 
			documents: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Document'
			},
			
		},
		{ timestamps: true }
	);

	UserSchema.method('toJSON', function() {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});

	const User = mongoose.model("User", UserSchema);
	return User;
}
