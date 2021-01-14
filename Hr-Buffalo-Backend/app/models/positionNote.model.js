module.exports = mongoose => {
	const PositionNoteSchema = mongoose.Schema(
		{
      notes: String,
      staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }     
		},
		{ timestamps: true }
	);

    PositionNoteSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const PositionNote = mongoose.model('PositionNote', PositionNoteSchema);
	return PositionNote;
};
