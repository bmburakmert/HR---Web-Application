module.exports = mongoose => {
	const PermissionSchema = mongoose.Schema(
		{
      name: String,
      description: String,
      roles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
      },
		},
		{ timestamps: true }
	);

    PermissionSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Permission = mongoose.model('Permission', PermissionSchema);
	return Permission;
};
