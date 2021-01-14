module.exports = mongoose => {
	const RoleSchema = mongoose.Schema(
		{
      name: String,
      description: String,
      permissions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission'
      },
      
		},
		{ timestamps: true }
	);

    RoleSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Role = mongoose.model('Role', RoleSchema);
	return Role;
};
