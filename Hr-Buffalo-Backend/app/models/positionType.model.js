module.exports = mongoose => {
	const PositionTypeSchema = mongoose.Schema(
		{
      name: String,
      description: String,
      stateCode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StateCode'
      },
      budgetCode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BudgetCode'
      },
		},
		{ timestamps: true }
	);

    PositionTypeSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const PositionType = mongoose.model('PositionType', PositionTypeSchema);
	return PositionType;
};
