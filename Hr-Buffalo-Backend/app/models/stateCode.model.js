module.exports = mongoose => {
	const StateCodeSchema = mongoose.Schema(
		{
      name: String,
      description: String
		},
		{ timestamps: true }
	);

    StateCodeSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const StateCode = mongoose.model('StateCode', StateCodeSchema);
	return StateCode;
};
