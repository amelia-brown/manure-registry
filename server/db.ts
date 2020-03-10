import 'pg';
import {Sequelize, Model, DataTypes} from 'sequelize';

const sequelize = new Sequelize('postgres://localhost:5432/manure_registry');

const seed = require('./seed');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const commonProperties = {
  firstName: {type: DataTypes.STRING, allowNull: false},
  lastName: {type: DataTypes.STRING, allowNull: false},
  email: {type: DataTypes.STRING, allowNull: false},
  phone: {type: DataTypes.STRING, allowNull: false},
  address: {type: DataTypes.STRING, allowNull: false},
  city: {type: DataTypes.STRING, allowNull: false},
  postal: {type: DataTypes.STRING, allowNull: false},
  manureType: {type: DataTypes.STRING, allowNull: false},
  quantity: {type: DataTypes.STRING, allowNull: false},
  organicSystem: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  composted: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
  analysisAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  logisticsComments: {type: DataTypes.TEXT},
};

export class Request extends Model {}
Request.init(
  {
    ...commonProperties,
    deliveryRequired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    applicationRequired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'request',
  },
);

export class Material extends Model {}
Material.init(
  {
    ...commonProperties,
    deliveryAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    applicationAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'material',
  },
);

interface ModelData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal: string;
  manureType: string;
  quantity: string;
  organicSystem: boolean;
  composted: boolean;
  analysisAvailable: boolean;
  logisticsComments: boolean;
  deliveryRequired: boolean;
  deliveryAvailable: boolean;
  applicationRequired: boolean;
  applicationAvailable: boolean;
}

sequelize.sync({force: true}).then(() => {
  seed.materials.forEach((data: ModelData) => {
    Material.create(data);
  });
  seed.requests.forEach((data: ModelData) => {
    Request.create(data);
  });
});
