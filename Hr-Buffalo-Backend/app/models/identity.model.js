module.exports = mongoose => {
  const IdentitySchema = new mongoose.Schema(
    {
      nickName: String,
      salutation: String,
      firstName: String,
      middleName: String,
      lastName: String,
      birthDate: Date,
      genderCode: String,
      secondaryLanguage: String,
      hispanicEtnicityIndicator: String,
      races: [],
      placeOfBirth: String,
      nativeLanguage: String,
      countryOfOrigin: String,
      initialUsEntryDate: Date,
      imageUrl: String
    },
    { timestamps: true }
  );

  IdentitySchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Identity = mongoose.model("Identity", IdentitySchema);
  return Identity;
}