module.exports = mongoose => {
	const CountrySchema = mongoose.Schema(
		{
      iso: String,
      name: String,
      iso3: String,
      phoneCode: String    
		},
		{ timestamps: true }
	);

    CountrySchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Country = mongoose.model('Country', CountrySchema);
	return Country;
};
