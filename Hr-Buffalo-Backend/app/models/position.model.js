module.exports = mongoose => {
	const PositionSchema = mongoose.Schema(
		{
      title: String,
      roomNumber: String,
      phoneExtension: String,
      role: String,
      isSupervisor: Boolean,
      isPosted: Boolean,
      positionType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PositionType'
      },
      location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
      },
      reportsTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      assignedStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      notes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PositionNote'
      },
		},
		{ timestamps: true }
	);

    PositionSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Position = mongoose.model('Position', PositionSchema);
	return Position;
};
