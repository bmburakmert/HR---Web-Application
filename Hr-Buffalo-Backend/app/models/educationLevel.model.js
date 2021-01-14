module.exports = mongoose => {
	const EducationLevelSchema = mongoose.Schema(
		{
      name: String,
      description: String 
		},
		{ timestamps: true }
	);

    EducationLevelSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const EducationLevel = mongoose.model('EducationLevel', EducationLevelSchema);
	return EducationLevel;
};
