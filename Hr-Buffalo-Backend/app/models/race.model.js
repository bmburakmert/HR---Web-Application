module.exports = mongoose => {
	const RaceSchema = mongoose.Schema(
		{
      name: String,
      code: String      
		},
		{ timestamps: true }
	);

    RaceSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Race = mongoose.model('Race', RaceSchema);
	return Race;
};
