show dbs;
use makiposiot;
show collections;
var myCursor = db.users.find({"username" : "admin"});
var documentArray = myCursor.toArray();
if(documentArray.length === 0){
  db.users.insert({
     "username" : "admin",
     "password" : "3961160ecd2395473e3bda395b1f1329b98f08676a1a6ce1006d00b6ce838828",
     "plainPassword":"MKP123456a@",
     "name" : "admin",
     "roles" : [
         "admin"
     ],
     "userSetting" : {},
     "googleAssistant" : false
   });
}
db.usersroles.deleteOne({"name" : "admin"});
db.usersroles.insert({
    "_id" : ObjectId("5c2c794aa8334c194b1a656c"),
    "updatedAt" : ISODate("2021-07-05T15:52:19.366+07:00"),
    "createdAt" : ISODate("2019-01-02T10:05:46.553+07:00"),
    "name" : "admin",
    "permissions" : [
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("5d5bc702aa885000061cd103"),
            "url" : "all",
            "method" : "update"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("5d5bc696aa885000061cd0f6"),
            "url" : "devices",
            "method" : "remove"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("5d5bc696aa885000061cd0f4"),
            "url" : "users",
            "method" : "remove"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "author"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5da1934e80189a2038e316ff"),
            "url" : "update-sln",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "author"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5da1934e80189a5585e316fd"),
            "url" : "update-sln-properties",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "author"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5f8d4312f9b0222272889ea7"),
            "url" : "update-device",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("5fd493489680dea27972b5bf"),
            "url" : "factory-projects",
            "method" : "patch"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "author"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("60c08afe6f4c6f19df455d18"),
            "url" : "factory-plans",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : true,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5d5bc696aa885000061cd0f2"),
            "url" : "all",
            "method" : "all"
        }
    ],
    "__v" : 0
});
db.usersroles.deleteOne({"name" : "device"});
db.usersroles.insert({
    "_id" : ObjectId("5c2c79a7a8334c194b1a6648"),
    "updatedAt" : ISODate("2021-06-22T14:26:25.286+07:00"),
    "createdAt" : ISODate("2019-01-02T10:15:28.317+07:00"),
    "name" : "device",
    "permissions" : [
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [
                    {
                        "idValue" : [
                            "5ca310342afab500063c7c72"
                        ],
                        "entity" : "user",
                        "idField" : "deviceTypeId"
                    }
                ],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb64c"),
            "method" : "create",
            "url" : "devices"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("6047253e0b2fc8a7a6547bfa"),
            "url" : "devices",
            "method" : "update"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("5c7353c47e770800063bb64b"),
            "method" : "remove",
            "url" : "devices"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [
                    {
                        "range" : [
                            "device"
                        ],
                        "field" : "roles"
                    },
                    {
                        "range" : [],
                        "force" : {
                            "clear" : true
                        },
                        "field" : "manufacturerId"
                    }
                ],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "_id"
                    },
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "__id__"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb64a"),
            "method" : "all",
            "url" : "devices"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5d808a513013f200083b36fd"),
            "url" : "devices-virtuals",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb649"),
            "method" : "find",
            "url" : "devices-types"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb648"),
            "method" : "get",
            "url" : "devices-types"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [
                    {
                        "idValue" : [
                            "5ca310342afab500063c7c72"
                        ],
                        "entity" : "user",
                        "idField" : "deviceTypeId"
                    }
                ],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5f913cb0e9a225635297a697"),
            "url" : "devices-get-type",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb647"),
            "method" : "find",
            "url" : "devices-properties"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb646"),
            "method" : "get",
            "url" : "devices-properties"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb645"),
            "method" : "create",
            "url" : "relations"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb644"),
            "method" : "remove",
            "url" : "relations"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb643"),
            "method" : "find",
            "url" : "relations-getchilds"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb642"),
            "method" : "get",
            "url" : "relations-getchilds"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb641"),
            "method" : "find",
            "url" : "relations-getparents"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb640"),
            "method" : "get",
            "url" : "relations-getparents"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "restrict" : [],
                "custom" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c9dd4162116130006d8949f"),
            "url" : "devices-schedule",
            "method" : "get"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "restrict" : [],
                "custom" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c9dd4162116130006d8949e"),
            "url" : "devices-schedule",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "restrict" : [],
                "custom" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5cf725842bd1d70006548582"),
            "url" : "automatic-rules",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "author"
                    },
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "payload",
                            "idField" : "type"
                        },
                        "field" : "authorType"
                    },
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "manufacturerId",
                            "sparse" : true
                        },
                        "field" : "manufacturerId"
                    }
                ],
                "restrict" : [],
                "whiteList" : [
                    {
                        "idValue" : [
                            "5ca310342afab500063c7c72",
                            "5fe45b1876df1a30e52256e7",
                            "5fe45b3a76df1a80fc22574c"
                        ],
                        "entity" : "user",
                        "idField" : "deviceTypeId"
                    }
                ],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5ca31ef8ed05f60006ae5c13"),
            "url" : "devices-qc",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [
                    {
                        "idValue" : [
                            "5ca310342afab500063c7c72",
                            "5fe45b1876df1a30e52256e7",
                            "5fe45b3a76df1a80fc22574c"
                        ],
                        "entity" : "user",
                        "idField" : "deviceTypeId"
                    }
                ],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("60d190a1c61375e6506dcd8e"),
            "url" : "devices-qc",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "deviceTypeId",
                        "ownerField" : "deviceTypeId"
                    },
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d37a5d3176e8542d87abd"),
            "url" : "update-device",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5da53f6e80189a423fe32288"),
            "url" : "update-sln",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5da53f6e80189a647be32287"),
            "url" : "update-sln-properties",
            "method" : "find"
        }
    ],
    "__v" : 0
})
db.usersroles.deleteOne({"name" : "user"});
db.usersroles.insert({
    "_id" : ObjectId("5c2c7982a8334c194b1a65fb"),
    "updatedAt" : ISODate("2021-08-19T13:57:07.330+07:00"),
    "createdAt" : ISODate("2019-01-02T10:11:49.652+07:00"),
    "name" : "user",
    "permissions" : [
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("5d5bc855aa885000061cd12d"),
            "method" : "update",
            "url" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("611e00c3b5ccba2911f390c8"),
            "url" : "mqtt/auth",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5d91d182f703010006390537"),
            "url" : "devices-get-type",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e0f037a15b88a359ee274ae"),
            "url" : "devices-types-override",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771e"),
            "method" : "find",
            "url" : "devices-types"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771d"),
            "method" : "get",
            "url" : "devices-types"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771c"),
            "method" : "find",
            "url" : "devices-properties"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771b"),
            "method" : "get",
            "url" : "devices-properties"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5db7c78fe46d94af8de79207"),
            "url" : "devices-events",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e16fd4b05c08500e96b68b4"),
            "url" : "devices-override",
            "method" : "patch"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5dba9f3145bf8d001465b285"),
            "url" : "devices",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5dba9f3145bf8d18bf65b284"),
            "url" : "devices",
            "method" : "get"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "relationsInfo.parentId"
                    },
                    {
                        "ownerField" : "$populate",
                        "idValue" : {
                            "foreignField" : "childrenId",
                            "localField" : "_id",
                            "ref" : "relations",
                            "path" : "relationsInfo"
                        }
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771a"),
            "method" : "patch",
            "url" : "devices-properties-update"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07719"),
            "method" : "create",
            "url" : "users"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("5c735372e3a1190006e07718"),
            "method" : "remove",
            "url" : "users"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "clear" : true
                        },
                        "field" : "roles"
                    },
                    {
                        "range" : [],
                        "force" : {
                            "clear" : true
                        },
                        "field" : "manufacturerId"
                    }
                ],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "_id"
                    },
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "__id__"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07717"),
            "method" : "all",
            "url" : "users"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5daac0e74065febe9a9b11bb"),
            "method" : "create",
            "url" : "users-control-devices"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5d7a0e8841f8fa0006423220"),
            "url" : "users-active-schemas",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07716"),
            "method" : "create",
            "url" : "relations"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07715"),
            "method" : "remove",
            "url" : "relations"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [
                    {
                        "idValue" : {
                            "_$nin" : [
                                "agent"
                            ]
                        },
                        "ownerField" : "roles"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07714"),
            "method" : "find",
            "url" : "relations-getchilds"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [
                    {
                        "idValue" : {
                            "_$nin" : [
                                "agent"
                            ]
                        },
                        "ownerField" : "roles"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07712"),
            "method" : "find",
            "url" : "relations-getparents"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "userId"
                    },
                    {
                        "range" : [],
                        "default" : {
                            "entity" : "user",
                            "idField" : "manufacturerId"
                        },
                        "field" : "manufacturerId"
                    }
                ],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c94af8d40c2e5000665e970"),
            "method" : "create",
            "url" : "users-feedbacks"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "author"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c9dd3b62116130006d89483"),
            "url" : "devices-schedule-groups",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c9dd3b62116130006d89482"),
            "url" : "devices-schedule-add",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c9dd3b62116130006d89481"),
            "url" : "devices-schedule-update",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d3501d3176e3f3ed87a46"),
            "url" : "automatic-plugins",
            "method" : "get"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d3501d3176edf28d87a45"),
            "url" : "automatic-plugins",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d3501d3176e4ee0d87a44"),
            "url" : "automatic-actions",
            "method" : "get"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d3501d3176e0579d87a43"),
            "url" : "automatic-actions",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d3501d3176e2e93d87a42"),
            "url" : "automatic-conditions",
            "method" : "get"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d3501d3176efd35d87a41"),
            "url" : "automatic-conditions",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "author"
                    }
                ],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "author"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c9ddc382116130006d894b8"),
            "url" : "automatic-rules",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5d4e89ce628450000632e34e"),
            "url" : "users-ip-to-location",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5d4e89ce628450000632e34d"),
            "url" : "users-weather",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "author"
                    }
                ],
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "author"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5d71de5dc529450006a80cfc"),
            "url" : "users-schemas",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "userId"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d39d7d3176efbdcd87af3"),
            "url" : "users-notifies",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5dbaa596727776180ae701d0"),
            "url" : "commercial-validation",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d3880865f198dd6d56f9c"),
            "url" : "update-release",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d390b865f197cd8d56fd3"),
            "url" : "users-actions-on-google",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5e1d686cd28e0357c636d108"),
            "url" : "update-native-force",
            "method" : "find"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("60c17ea2ac03b0876e174cc9"),
            "url" : "active-connection-manager",
            "method" : "all"
        }
    ],
    "__v" : 0
})
