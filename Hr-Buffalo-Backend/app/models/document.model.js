module.exports = mongoose => {
	const DocumentSchema = mongoose.Schema(
		{
      name: String,
      description: String,
      fileUrl: String,
		},
		{ timestamps: true }
	);

    DocumentSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Document = mongoose.model('Document', DocumentSchema);
	return Document;
};
