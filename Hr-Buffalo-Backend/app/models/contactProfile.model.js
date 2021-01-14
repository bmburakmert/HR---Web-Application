module.exports = mongoose => {
	const ContactProfileSchema = mongoose.Schema(
		{
      emailAddress: String,
      cellPhone: String      
		},
		{ timestamps: true }
	);

    ContactProfileSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const ContactProfile = mongoose.model('ContactProfile', ContactProfileSchema);
	return ContactProfile;
};
