module.exports = mongoose => {
	const BudgetCodeSchema = mongoose.Schema(
		{
      name: String,
      description: String
		},
		{ timestamps: true }
	);

    BudgetCodeSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const BudgetCode = mongoose.model('BudgetCode', BudgetCodeSchema);
	return BudgetCode;
};
