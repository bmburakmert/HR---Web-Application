module.exports = mongoose => {
	const AddressSchema = mongoose.Schema(
		{
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      zipCode: String,
      phone: String,
		},
		{ timestamps: true }
	);

    AddressSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Address = mongoose.model('Address', AddressSchema);
	return Address;
};
