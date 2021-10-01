---
  title: Cấu trúc dữ liệu
---

## Users

### Schema
```js
mongooseClient.Schema({
    _id : { type: Schema.Types.ObjectId, index: true, unique: true, required: true },
    username: {type: String, unique: true, required: true, index: true},
    manufacturerId: { type: Schema.Types.ObjectId, index: true, sparse: true }, //

    facebookId: {type: String, unique: true, index: true, sparse: true},
    googleId: {type: String, unique: true, index: true, sparse: true},
    accountkitId: {type: String, unique: true, index: true, sparse: true},
    appleId: {type: String, unique: true, index: true, sparse: true},

    googleAssistant: { type: Boolean, default: false },
    maikaAssistant: { type: Boolean, default: false },

    group: { type: Boolean, default: false },
    roles: { type: Array, default: ['user']}, // ['admin']  // ['user']

    name: {type: String},
    email: {type: String},
    phoneNumber: {type: String},
    photo: {type: String},
    addr: {type: String},

    userSetting: Schema.Types.Mixed,
    profile: Schema.Types.Mixed,

    trustedClientIds: [{ type: String }],

  }, {
    timestamps: true
  });
```

## Devices
### Schema
```js
mongooseClient.Schema({
  _id : { type: Schema.Types.ObjectId, index: true, unique: true, required: true },

  productId: {type: String, unique: true, index: true, required: true },
  manufacturerId: { type: Schema.Types.ObjectId, index: true, sparse: true }, //
  virtual: {type: Boolean, default: false},
  roles: {type: Array, default: ['device']},
  image: {type: String },
  description: {type: String},
  hardwareVersion: {type: String, default: '1'},
  hardwareVerOfFirm: {type: String, default: '1'},
  firmwareVersion: {type: Number, default: 1},
  mcuFirmVer: {type: Number, default: 1},

  status: {type: String, default: 'OFFLINE', enum: ['OFFLINE', 'ONLINE'] },
  statusByProtocols: { type: Schema.Types.Mixed, default: {} },

  activated: {type: Boolean, default: true},
  systemStatus: {type: String, default: 'PLACEHOLDER', index: true, sparse: true}, // enum: ['PLACEHOLDER', 'PRODUCING', 'TESTING', 'USECASE_TESTING', 'PACKING', 'STORING', 'DISTRIBUTION', 'INUSED', 'INWILD', 'WARRANTY' ]

  deviceTypeId: { type: Schema.Types.ObjectId, required: true, index: true },

  ipAddress: {type: String},
  location: {type: geoSchema, index: '2dsphere'},

  propertiesValue: { type: Schema.Types.Mixed, default: {} },

  warrantyActivationTime: { type: Date },

  deviceTypeInfoOverride: {
    properties: [{
      name: {type: String, required: true },
      unit: {type: String },
      displayName: {type: String },
      icon: {type: String },
      description: {type: String},
      propertyId: { type: Schema.Types.ObjectId }, // link to devices-properties-model
      localId: {type: String },
      code: {type: String},
      unSupported: {type: Boolean},
      systemOnly: {type: Boolean}, // this field indicate properties only use by system , not device
      roles: [{
        _id: false,
        name: { type: String }, // ['admin'] ['manager'] // ['user'] ['guest']
        forbidden: {type: Boolean, default: true},
        permissions: {
          writeable: {type: Boolean, default: true},
          limit: { // only avaiable for systemOnly property
            custom: {
              range: [Schema.Types.Mixed]
            }
          }
        }
      }],
      displayPriority: {type: Number, min: -2}, // -1: hide, 0 : no display , 1 is max, smaller is higher
      propertyInfo: {
        writeable: {type: Boolean},
        methode: {type: Boolean},
        params: [{
          _id: false,
          name: {type: String },
          displayName: {type: String },
          description: {type: String},

          type: {type: String, enum: [
            'NUMBER', 'ARRAY_NUMBER', 'ARRAY_NUMBER_FIX',
            'STRING', 'ARRAY_STRING', 'ARRAY_STRING_FIX',
            'BOOLEAN', 'ARRAY_BOOLEAN', 'ARRAY_BOOLEAN_FIX',
            'TIME', 'ARRAY_TIME', 'ARRAY_TIME_FIX',
            'PHONE', 'ARRAY_PHONE', 'ARRAY_PHONE_FIX',
            'ARRAY', 'DATE', 'COORDINATE', 'COLOR', 'IMAGE', 'MIX'
          ] },
          expr: {type: String }, // variable x
          unit: {type: String },
          defaultValue: Schema.Types.Mixed,

          units: [{
            _id: false,
            expr: {type: String }, // variable x
            invExpr: {type: String }, // variable x
            unit: {type: String },
            icon: {type: String }
          }],

          range: [{
            _id: false,
            min: Schema.Types.Mixed,
            max: Schema.Types.Mixed,
            step: {type: Number},
            name: {type: String },
            value: Schema.Types.Mixed,
            icon: {type: String }, color: {type: String },
            valueSetting: Schema.Types.Mixed // {notify:{title:'Báo động'}}
          }]
        }],

        controlPrototype: {
          upValueMethodeId: {type: Schema.Types.ObjectId},
          downValueMethodeId: { type: Schema.Types.ObjectId},
          setValueMethodeId: {type: Schema.Types.ObjectId },
        },
      }
    }]
  }

}, {
  timestamps: true,
  minimize: false
})
```

```js
const geoSchema = new Schema({
    _id: false,
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // long lat
      // default: undefined
      require: true
    }
  });
```

## Relations
### Schema
```js
mongooseClient.Schema({
  _id : { type: Schema.Types.ObjectId, index: true, unique: true, required: true },

  parentId: { type: Schema.Types.ObjectId, required: true},
  parentUsername: { type: String},
  parentType: { type: String, required: true},
  childrenId: { type: Schema.Types.ObjectId, required: true},
  childrenUsername: { type: String},
  childrenType: { type: String, required: true},
  secretKey: { type: String, required: true},
  groupId: { type: Schema.Types.ObjectId},
  author: { type: Schema.Types.ObjectId },
  authorType: {type: String, enum: ['user', 'device'] },
  roles: [String], //  ['admin'] ['manager'] // ['user'] ['guest']
  permissions: [{
    propertyName: { type: String },
    forbidden: {type: Boolean, default: true},
    limit: {
      writeable: {type: Boolean, default: false},
      custom: {
        range: [Schema.Types.Mixed]
      }
    }
  }],

}, {
  timestamps: true
})
```

## Devices Events
### Schema
```js
Schema({
  _id : { type: Schema.Types.ObjectId, index: true, unique: true, required: true },

  deviceId: { type: Schema.Types.ObjectId, required: true },
  productId: { type: String },
  manufacturerId: { type: Schema.Types.ObjectId },
  time: { type: Date, default: Date.now, index: true },
  eventType: {type: String, required: true},
  //  UPDATE_STATUS, UPDATE_PROPERTY, CALL_SERVICE, UPDATE_HISTORY, RESPONSE_CONTROL_PROPERTY, DEVICE_PUBLISH_LIMIT
  //  CONTROL_DEVICE_LIMIT
  eventDescription: {type: Schema.Types.Mixed}
}, {
  timestamps: true
})
```

## User Events
### Schema
```js
Schema({
  _id : { type: Schema.Types.ObjectId, index: true, unique: true, required: true },

  userId: { type: Schema.Types.ObjectId, required: true, index: true },
  username: { type: String },
  manufacturerId: { type: Schema.Types.ObjectId },
  time: { type: Date, index: true, default: Date.now },
  eventType: { type: String, required: true, index: true},
  eventDescription: {type: Schema.Types.Mixed},
}, {
  timestamps: true
})
```

## Roles
### Schema
```js
Schema({
  _id : { type: Schema.Types.ObjectId, index: true, unique: true, required: true },

  name: { type: String, unique: true, required: true, index: true },
  permissions: [{
    url: { type: String },
    method: Schema.Types.Mixed,
    forbidden: {type: Boolean, default: false},
    limit: {
      whiteList: [{
        _id: false,
        entity: { type: String },
        idField: { type: String },
        idValue: [Schema.Types.Mixed]
      }],
      blackList: [{
        _id: false,
        entity: { type: String },
        idField: { type: String },
        idValue: [Schema.Types.Mixed]
      }],
      restrict: [{
        _id: false,
        entity: { type: String },
        idField: { type: String },
        idValue: Schema.Types.Mixed,
        ownerField: { type: String },
      }],
      skipPostRestrict: {type: Boolean, default: false},
      custom: [{
        _id: false,
        field: { type: String },
        force: Schema.Types.Mixed,
        range: [Schema.Types.Mixed],
        default: Schema.Types.Mixed
      }],
      apiOptions: Schema.Types.Mixed
    }
  }]
}, {
  timestamps: true
})
```
