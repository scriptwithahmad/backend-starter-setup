import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default (sequelize) => {
  class User extends Model {}

  User.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user", // Default user
        enum: ["user", "admin", "superadmin"],
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "inactive", // Default inactive
        enum: ["active", "inactive", "blocked", "invited"],
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: true,
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
      scopes: {
        withPassword: {
          attributes: { include: ["password"] },
        },
      },
    }
  );

  User.beforeCreate((user) => {
    user._id = uuidv4();
  });

  return User;
};
