show dbs;
use makiposiot;
show collections;

/////////// admin account
var myCursor = db.users.find({"username" : "admin"});
var documentArray = myCursor.toArray();
if(documentArray.length === 0){
  db.users.insert({
     "username" : "admin",
     "password" : "",
     "plainPassword":"",
     "name" : "admin",
     "roles" : [
         "admin"
     ],
     "userSetting" : {},
     "googleAssistant" : false
   });
}

////////////////// role

db.usersroles.deleteOne({"name" : "admin"});
db.usersroles.insert({
    "_id" : ObjectId("5c2c794aa8334c194b1a656c"),
    "updatedAt" : ISODate("2021-11-09T12:03:43.378+07:00"),
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
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : [],
                "apiOptions" : {
                    "allowResetPassword" : true
                }
            },
            "forbidden" : false,
            "_id" : ObjectId("618a012f72b28d87748de7e6"),
            "url" : "users",
            "method" : "patch"
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
    "updatedAt" : ISODate("2021-10-26T16:25:08.831+07:00"),
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
                            "5ca310342afab500063c7c72",
                            "5fe45b3a76df1a80fc22574c"
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
    "updatedAt" : ISODate("2021-12-27T17:19:45.663+07:00"),
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
            "_id" : ObjectId("61c99341e766239d29f3edd9"),
            "url" : "automatic-heavy-query",
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
            "_id" : ObjectId("61c99341e766230e58f3edda"),
            "url" : "devices-heavy-query",
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
            "_id" : ObjectId("61c99341e76623be30f3eddb"),
            "url" : "relations-heavy-query",
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
            "_id" : ObjectId("61c99341e7662311b0f3eddc"),
            "url" : "users-heavy-query",
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
                        "ownerField" : "\$populate",
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
                            "_\$nin" : [
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
                            "_\$nin" : [
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
db.usersroles.deleteOne({"name" : "tester"});
db.usersroles.insert({
    "_id" : ObjectId("5caf06e85755d500068fc3eb"),
    "name" : "tester",
    "permissions" : [
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "_id" : ObjectId("5daa88ccd888912a3f7cf3ba"),
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5caf06e85755d500068fc3ed"),
            "url" : "devices-qc",
            "method" : "get"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "_id" : ObjectId("5daa88ccd88891ec097cf3b8"),
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5caf06e85755d500068fc3ec"),
            "url" : "devices-qc",
            "method" : "find"
        }
    ],
    "createdAt" : ISODate("2019-04-11T16:20:41.003+07:00"),
    "updatedAt" : ISODate("2020-12-15T09:56:16.747+07:00"),
    "__v" : 0
})
db.usersroles.deleteOne({"name" : "installationTechnician"});
db.usersroles.insert({
    "_id" : ObjectId("60f10a768ecabcffadbba0ee"),
    "name" : "installationTechnician",
    "permissions" : [],
    "createdAt" : ISODate("2021-07-16T11:26:30.045+07:00"),
    "updatedAt" : ISODate("2021-07-16T11:26:30.045+07:00"),
    "__v" : 0
})
db.usersroles.deleteOne({"name" : "deviceCreator"});
db.usersroles.insert({
    "_id" : ObjectId("5ddf758e606260734e0187b1"),
    "name" : "deviceCreator",
    "permissions" : [
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5ddf75a513cd367a32864612"),
            "url" : "devices",
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
            "_id" : ObjectId("5f6b423b210d663a11400962"),
            "url" : "devices-get-type",
            "method" : "all"
        }
    ],
    "createdAt" : ISODate("2019-11-28T14:21:50.654+07:00"),
    "updatedAt" : ISODate("2020-09-23T19:40:27.704+07:00"),
    "__v" : 0
})
db.usersroles.deleteOne({"name" : "updateDevice"});
db.usersroles.insert({
    "_id" : ObjectId("619b42e272b28d6e1ca353f2"),
    "name" : "updateDevice",
    "permissions" : [
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
            "_id" : ObjectId("619b430972b28d4921a35413"),
            "url" : "update-device",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : [],
                "apiOptions" : {
                    "allowCustomEventType" : true,
                    "allowControlByManufacturerId" : true
                }
            },
            "forbidden" : false,
            "_id" : ObjectId("619b43567234a705838320c1"),
            "url" : "users-control-devices",
            "method" : "create"
        }
    ],
    "createdAt" : ISODate("2021-11-22T14:12:34.672+07:00"),
    "updatedAt" : ISODate("2021-12-09T16:57:38.431+07:00"),
    "__v" : 0
})
db.usersroles.deleteOne({"name" : "adminPartner"});
db.usersroles.insert({
    "_id" : ObjectId("5c2c782ca8334c194b1a6234"),
    "updatedAt" : ISODate("2021-11-18T23:05:00.944+07:00"),
    "createdAt" : ISODate("2019-01-02T10:01:32.073+07:00"),
    "name" : "adminPartner",
    "permissions" : [
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "forbidden" : true,
            "_id" : ObjectId("604724f63b1946900c948748"),
            "url" : "all",
            "method" : "update"
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
            "_id" : ObjectId("604725140b2fc81939547bc5"),
            "url" : "devices",
            "method" : "remove"
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
            "_id" : ObjectId("6051920e54346e0755af6b1e"),
            "url" : "users",
            "method" : "remove"
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
            "_id" : ObjectId("619679ac7234a7717f7d1996"),
            "url" : "devices",
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
            "_id" : ObjectId("619679ac7234a7a36f7d1997"),
            "url" : "devices-types",
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
            "_id" : ObjectId("619679ac7234a757df7d1998"),
            "url" : "devices-properties",
            "method" : "create"
        },
        {
            "limit" : {
                "skipPostRestrict" : true,
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "manufacturerId"
                        },
                        "field" : "manufacturerId"
                    },
                    {
                        "range" : [],
                        "force" : {
                            "clear" : true
                        },
                        "field" : "roles"
                    }
                ],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735419e3a1190006e07730"),
            "method" : "all",
            "url" : "devices"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "custom" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735419e3a1190006e0772f"),
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
            "_id" : ObjectId("5c735419e3a1190006e0772e"),
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
            "_id" : ObjectId("5c735419e3a1190006e0772d"),
            "method" : "get",
            "url" : "devices-types"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "manufacturerId"
                        },
                        "field" : "manufacturerId"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5daaca4cb4a238a6e521b84d"),
            "url" : "devices-types",
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
            "_id" : ObjectId("5c735419e3a1190006e07728"),
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
            "_id" : ObjectId("5c735419e3a1190006e07727"),
            "method" : "get",
            "url" : "devices-properties"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : [
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "manufacturerId"
                        },
                        "field" : "manufacturerId"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5daacaabb4a2385b2b21b86d"),
            "url" : "devices-properties",
            "method" : "all"
        },
        {
            "limit" : {
                "skipPostRestrict" : true,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5dbabb7a7277762954e70396"),
            "url" : "devices-events",
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
                            "idField" : "manufacturerId"
                        },
                        "field" : "manufacturerId"
                    },
                    {
                        "range" : [
                            "user",
                            "adminPartner",
                            "tester",
                            "department",
                            "cskh",
                            "agent"
                        ],
                        "field" : "roles"
                    }
                ],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5c735419e3a1190006e07720"),
            "method" : "all",
            "url" : "users"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5d9ff1258ca24d000690ac22"),
            "url" : "devices-qc",
            "method" : "get"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5d9ff1258ca24d000690ac20"),
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
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
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
                    },
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "manufacturerId"
                        },
                        "field" : "manufacturerId"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5da18fa180189a3b41e31681"),
            "url" : "update-sln",
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
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
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
                    },
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "manufacturerId"
                        },
                        "field" : "manufacturerId"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5da18fa180189a0716e31680"),
            "url" : "update-sln-properties",
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
            "_id" : ObjectId("5f572b567d1aacee17ca268a"),
            "url" : "users-clients",
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
            "_id" : ObjectId("5f572b567d1aac50a3ca268b"),
            "url" : "users-clients",
            "method" : "get"
        },
        {
            "limit" : {
                "skipPostRestrict" : false,
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "idValue" : {
                            ["_\$in"] : [
                                "user",
                                "adminPartner",
                                "tester",
                                "department",
                                "cskh",
                                "agent"
                            ]
                        },
                        "ownerField" : "name"
                    },
                    {
                        "idValue" : [
                            "_id",
                            "name",
                            "permissions"
                        ],
                        "ownerField" : "\$select"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5f7fdbe429c5063654aeccf2"),
            "url" : "users-roles",
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
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
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
                    },
                    {
                        "range" : [],
                        "force" : {
                            "entity" : "user",
                            "idField" : "manufacturerId"
                        },
                        "field" : "manufacturerId"
                    }
                ]
            },
            "forbidden" : false,
            "_id" : ObjectId("5f8d433068dbb479bb76cdb6"),
            "url" : "update-device",
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
                        "idField" : "manufacturerId",
                        "ownerField" : "manufacturerId"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("5f916f8fe9a225591097aa9f"),
            "url" : "users-feedbacks",
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
                        "idField" : "manufacturerId",
                        "ownerField" : "_id"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("605e8bac94966dc4f13e79a5"),
            "url" : "devices-manufacturers",
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
                        "idField" : "manufacturerId",
                        "ownerField" : "_id"
                    },
                    {
                        "entity" : "user",
                        "idField" : "manufacturerId",
                        "ownerField" : "__id__"
                    }
                ],
                "custom" : []
            },
            "forbidden" : false,
            "_id" : ObjectId("605e8c5b60f8864061ed6650"),
            "url" : "devices-manufacturers",
            "method" : "get"
        }
    ],
    "__v" : 0
})


////////////////// automatic

var myCursor = db.automaticplugins.find({"_id" : ObjectId("5ad95d2d58a16800066e1637")});
var documentArray = myCursor.toArray();
if(documentArray.length === 0){
  db.automaticplugins.insert({
    "_id" : ObjectId("5ad95d2d58a16800066e1637"),
    "name" : "Thiết bị makipos",
    "description" : "Plugin for makipos device",
    "createdAt" : ISODate("2018-04-20T10:23:25.880+07:00"),
    "updatedAt" : ISODate("2021-02-26T14:55:54.802+07:00"),
    "__v" : 0,
    "active" : true
  });
}

db.automaticconditions.remove({})
db.automaticconditions.insertMany([{
    "_id" : ObjectId("5ad95d4958a16800066e1638"),
    "protocol" : "REST",
    "method" : "GET",
    "dataFormat" : "application/json",
    "name" : "Điều kiện giá trị",
    "description" : "Trạng thái hoạt động, thông số của thiết bị",
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "url" : "http://automatic-service:3030/automatic-property-condition",
    "params" : [
        {
            "field" : "HEADER",
            "_id" : ObjectId("5ad95d4958a16800066e164a"),
            "name" : "Authorization",
            "displayName" : "",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5ad95d4958a16800066e1649"),
            "name" : "deviceId",
            "displayName" : "Id thiết bị",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5ad95d4958a16800066e1646"),
            "name" : "localId",
            "displayName" : "mã nội bộ",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5ad95d4958a16800066e1648"),
            "name" : "propertyName",
            "displayName" : "tên thuộc tính",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5ad95d4958a16800066e1647"),
            "name" : "propertyCode",
            "displayName" : "mã thuộc tính",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5ad95d4958a16800066e163b"),
            "name" : "type",
            "displayName" : "Giá trị",
            "description" : "",
            "type" : "STRING",
            "range" : [
                {
                    "step" : 0,
                    "_id" : ObjectId("5ad95d4958a16800066e163d"),
                    "name" : "bằng",
                    "value" : "=="
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5ad95d4958a16800066e163c"),
                    "name" : "khác",
                    "value" : "!="
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5ad95d4958a16800066e1645"),
                    "name" : "trong khoảng",
                    "value" : "ine"
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5ad95d4958a16800066e1644"),
                    "name" : "ngoài khoảng",
                    "value" : "out"
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5ad95d4958a16800066e1641"),
                    "name" : "lớn hơn",
                    "value" : ">"
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5ad95d4958a16800066e1640"),
                    "name" : "lớn hơn hoặc bằng",
                    "value" : ">="
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5ad95d4958a16800066e163f"),
                    "name" : "nhỏ hơn",
                    "value" : "<"
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5ad95d4958a16800066e163e"),
                    "name" : "nhỏ hơn hoặc bằng",
                    "value" : "<="
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5e65c0a27ccd67cd64ef1b7d"),
                    "name" : "bất kỳ",
                    "value" : "any"
                }
            ]
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5ad95d4958a16800066e163a"),
            "name" : "minValue",
            "displayName" : "gía trị (hoặc ngưỡng dưới)",
            "description" : "",
            "type" : "MIX",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5ad95d4958a16800066e1639"),
            "name" : "maxValue",
            "displayName" : "Ngưỡng trên",
            "description" : "",
            "type" : "MIX",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5ef98f28d3407517e504442a"),
            "name" : "passive",
            "displayName" : "Là điều kiện phụ ?",
            "description" : "",
            "type" : "BOOL",
            "defaultValue" : false,
            "range" : []
        }
    ],
    "createdAt" : ISODate("2018-04-20T10:23:53.089+07:00"),
    "updatedAt" : ISODate("2021-07-12T13:40:42.403+07:00"),
    "__v" : 0,
    "active" : true,
    "displayName" : "Trạng thái thiết bị"
},{
    "_id" : ObjectId("5b0cbed913b7d400077e7947"),
    "protocol" : "REST",
    "method" : "GET",
    "dataFormat" : "application/json",
    "name" : "Trạng thái kết nối",
    "description" : "Trạng thái kết nối, mất kết nối của thiết bị",
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "url" : "http://automatic-service:3030/automatic-status-device-condition",
    "params" : [
        {
            "field" : "HEADER",
            "_id" : ObjectId("5b0cbed913b7d400077e794d"),
            "name" : "Authorization",
            "displayName" : "",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5b0cbed913b7d400077e794c"),
            "name" : "deviceId",
            "displayName" : "Id thiết bị",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5b0cbed913b7d400077e7949"),
            "name" : "status",
            "displayName" : "trạng thái",
            "description" : "",
            "type" : "STRING",
            "range" : [
                {
                    "step" : 0,
                    "_id" : ObjectId("5b0cbed913b7d400077e794b"),
                    "name" : "kết nối",
                    "value" : "CONNECTED"
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5b0cbed913b7d400077e794a"),
                    "name" : "mất kết nối",
                    "value" : "DISCONNECTED"
                }
            ]
        }
    ],
    "createdAt" : ISODate("2018-05-29T09:45:45.968+07:00"),
    "updatedAt" : ISODate("2020-08-11T15:30:01.859+07:00"),
    "__v" : 0,
    "active" : true,
    "displayName" : "Trạng thái kết nối (Online/Offline)"
},{
    "_id" : ObjectId("5b0cd0d113b7d400077e7955"),
    "protocol" : "REST",
    "method" : "GET",
    "dataFormat" : "application/json",
    "name" : "Cảnh báo nhắc lại",
    "description" : "Hỗ trợ khả năng nhắc lại hành động theo chu kỳ khi thỏa mãn điều kiện",
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "url" : "http://automatic-service:3030/automatic-period-condition",
    "params" : [
        {
            "field" : "PARAM",
            "_id" : ObjectId("5b0cd0d113b7d400077e7956"),
            "name" : "repeatPeriod",
            "displayName" : "chu ky lap lai thong bao",
            "description" : "",
            "type" : "NUMBER",
            "range" : [],
            "unit" : "*30s"
        }
    ],
    "createdAt" : ISODate("2018-05-29T11:02:25.020+07:00"),
    "updatedAt" : ISODate("2020-07-27T16:44:20.251+07:00"),
    "__v" : 0,
    "active" : false
},{
    "_id" : ObjectId("5d19836e825f700006279d9e"),
    "protocol" : "REST",
    "method" : "GET",
    "dataFormat" : "JSON",
    "name" : "Trạng thái kết nối mạng của điện thoại",
    "description" : "Sự kiện dựa trên trạng thái kết nối mạng của điện thoại (CHỈ DÀNH CHO ANDROID)",
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "url" : "http://automatic-service:3030/automatic-user-client-connectivity-condition",
    "params" : [
        {
            "field" : "PARAM",
            "_id" : ObjectId("5e8af939e0efbfc66d4163cc"),
            "name" : "userId",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5d1984eca9d460000618d552"),
            "name" : "clientId",
            "displayName" : "mã thiết bị",
            "description" : "Mã thiết bị (điện thoại) của người dùng",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5d1b3009fddb770008e53b74"),
            "name" : "type",
            "displayName" : "Loại",
            "description" : " ",
            "type" : "STRING",
            "range" : [
                {
                    "step" : 0,
                    "_id" : ObjectId("5d1b3009fddb770008e53b76"),
                    "name" : "Kết nối mạng",
                    "value" : "=="
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5d1b3009fddb770008e53b75"),
                    "name" : "Kết nối mạng khác",
                    "value" : "!="
                }
            ]
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5d1984eca9d460000618d54f"),
            "name" : "connectivityType",
            "displayName" : "Loại kết nối mạng",
            "type" : "STRING",
            "range" : [
                {
                    "step" : 0,
                    "_id" : ObjectId("5d1984eca9d460000618d551"),
                    "name" : "WIFI",
                    "value" : "WIFI"
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5d1984eca9d460000618d550"),
                    "name" : "MOBILE",
                    "value" : "MOBILE"
                }
            ],
            "description" : "  "
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5d1984eca9d460000618d54e"),
            "name" : "connectivityName",
            "displayName" : "Tên wifi (ssid)",
            "type" : "STRING",
            "range" : [],
            "description" : "   "
        }
    ],
    "createdAt" : ISODate("2019-07-01T10:52:14.719+07:00"),
    "updatedAt" : ISODate("2021-07-26T16:19:06.419+07:00"),
    "__v" : 0,
    "active" : false,
    "cannotTransfer" : true
},{
    "_id" : ObjectId("5e7c54ada507f25ad54c6d40"),
    "active" : true,
    "protocol" : "REST",
    "method" : "GET",
    "dataFormat" : "application/json",
    "name" : "Delay",
    "description" : "Trễ kích hoạt hành động",
    "displayName" : "Trễ kích hoạt",
    "url" : "http://automatic-service:3030/automatic-delay-condition",
    "params" : [
        {
            "field" : "PARAM",
            "_id" : ObjectId("5e7c54ada507f249d24c6d41"),
            "name" : "delayTime",
            "displayName" : "Thời gian trễ",
            "description" : "Thời gian trễ thực hiện hành động (theo đơn vị giây)",
            "type" : "NUMBER",
            "unit" : "s",
            "range" : []
        }
    ],
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "createdAt" : ISODate("2020-03-26T14:07:25.519+07:00"),
    "updatedAt" : ISODate("2020-07-22T15:52:16.807+07:00"),
    "__v" : 0,
    "orderAsk" : 100
},{
    "_id" : ObjectId("5f1ab57c4a189a19f5fc52d3"),
    "active" : true,
    "orderAsk" : 0,
    "protocol" : "REST",
    "method" : "GET",
    "dataFormat" : "application/json",
    "name" : "Time Condition",
    "description" : "Điều kiện mốc thời gian (hẹn giờ) hoặc khoảng thời gian",
    "displayName" : "Điều kiện thời gian",
    "params" : [
        {
            "field" : "PARAM",
            "_id" : ObjectId("5f1ab57c4a189a62ccfc52d4"),
            "name" : "timeRange",
            "displayName" : "Khoảng thời gian",
            "description" : "",
            "type" : "BOOLEAN",
            "range" : [],
            "unit" : "s",
            "configHint" : ""
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5f1ab57c4a189a4f48fc52d5"),
            "name" : "inDay",
            "displayName" : "Trong ngày",
            "description" : "",
            "type" : "BOOLEAN",
            "range" : [],
            "unit" : "s",
            "configHint" : ""
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5f1ab57c4a189a4690fc52d6"),
            "name" : "dayByWeek",
            "displayName" : "Ngày trong tuần",
            "description" : "",
            "type" : "MIX",
            "range" : [],
            "unit" : "s",
            "configHint" : ""
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5f1ab57c4a189ac42efc52d7"),
            "name" : "startTime",
            "displayName" : "Thời điểm đầu",
            "description" : "",
            "type" : "TIME",
            "range" : [],
            "unit" : "s",
            "configHint" : ""
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5f1ab57c4a189a4b10fc52d8"),
            "name" : "stopTime",
            "displayName" : "Thời điểm cuối",
            "description" : "",
            "type" : "TIME",
            "range" : [],
            "unit" : "s",
            "configHint" : ""
        }
    ],
    "url" : "http://automatic-service:3030/automatic-time-condition",
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "__v" : 0,
    "createdAt" : ISODate("2020-07-24T17:18:36.619+07:00"),
    "updatedAt" : ISODate("2020-12-17T16:07:00.171+07:00")
}])

db.automaticactions.remove({})
db.automaticactions.insertMany([{
    "_id" : ObjectId("5ad95d6c58a16800066e164b"),
    "protocol" : "REST",
    "method" : "POST",
    "dataFormat" : "application/json",
    "name" : "Điều khiển thiết bị",
    "description" : "Điều khiển thiết bị Makihome của bạn",
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "url" : "http://users-service:3030/users-control-devices",
    "params" : [
        {
            "field" : "HEADER",
            "_id" : ObjectId("5f98420293b0788f069a068e"),
            "name" : "Authorization",
            "displayName" : "",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5ad95d6c58a16800066e164d"),
            "name" : "deviceId",
            "displayName" : "Id thiết bị",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5ca58dfd42a1cc00061ca7cf"),
            "name" : "localId",
            "displayName" : "mã nội bộ",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5ca58dfd42a1cc00061ca7cd"),
            "name" : "propertyCode",
            "displayName" : "mã thuộc tính",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5ca58dfd42a1cc00061ca7ce"),
            "name" : "propertyName",
            "displayName" : "tên thuộc tính",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5d987a3656cf4600063db761"),
            "name" : "value",
            "displayName" : "giá trị",
            "description" : "",
            "type" : "MIX",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5d987a3656cf4600063db760"),
            "name" : "expectValue",
            "displayName" : "giá trị kỳ vọng",
            "description" : "",
            "type" : "MIX",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5ca58dfd42a1cc00061ca7c9"),
            "name" : "reason",
            "displayName" : "",
            "description" : "",
            "type" : "STRING",
            "defaultValue" : "AUTOMATIC",
            "range" : []
        }
    ],
    "createdAt" : ISODate("2018-04-20T10:24:28.650+07:00"),
    "updatedAt" : ISODate("2020-11-20T21:58:52.147+07:00"),
    "__v" : 0,
    "active" : true
},{
    "_id" : ObjectId("5b0cb93e13b7d400077e7941"),
    "protocol" : "REST",
    "method" : "POST",
    "dataFormat" : "application/json",
    "name" : "Thông báo notify",
    "description" : "Gửi thông báo tới cho điện thoại",
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "url" : "http://users-service:3030/users-notifies",
    "params" : [
        {
            "field" : "HEADER",
            "_id" : ObjectId("5b0cb93e13b7d400077e7946"),
            "name" : "Authorization",
            "displayName" : "",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5b0cb93e13b7d400077e7945"),
            "name" : "offApp",
            "displayName" : "",
            "defaultValue" : true,
            "description" : "",
            "type" : "BOOL",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5b0cb93e13b7d400077e7944"),
            "name" : "userId",
            "displayName" : "id người dùng",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5b0cb93e13b7d400077e7943"),
            "name" : "title",
            "displayName" : "Tựa đề",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5b0cb93e13b7d400077e7942"),
            "name" : "message",
            "displayName" : "Nội dung",
            "description" : "",
            "type" : "STRING",
            "range" : []
        }
    ],
    "createdAt" : ISODate("2018-05-29T09:21:50.431+07:00"),
    "updatedAt" : ISODate("2021-12-03T16:31:13.913+07:00"),
    "__v" : 0,
    "active" : true,
    "cannotTransfer" : false
},{
    "_id" : ObjectId("5d7a19c26ad58500077d99dc"),
    "protocol" : "REST",
    "method" : "POST",
    "dataFormat" : "application/json",
    "name" : "Kích hoạt kịch bản",
    "description" : "Kích hoạt kịch bản",
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "url" : "http://users-service:3030/users-active-schemas",
    "params" : [
        {
            "field" : "HEADER",
            "_id" : ObjectId("5d7a19c26ad58500077d99df"),
            "name" : "Authorization",
            "displayName" : "",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5d7a19c26ad58500077d99de"),
            "name" : "schemaId",
            "displayName" : "Kịch bản",
            "defaultValue" : true,
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5d7a19c26ad58500077d99dd"),
            "name" : "schemaName",
            "displayName" : "Tên kịch bản",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5d81d5f556cf4600063db72f"),
            "name" : "reason",
            "displayName" : "",
            "description" : "",
            "type" : "STRING",
            "defaultValue" : "AUTOMATIC",
            "range" : []
        }
    ],
    "createdAt" : ISODate("2018-05-29T09:21:50.431+07:00"),
    "updatedAt" : ISODate("2020-07-27T16:42:59.122+07:00"),
    "__v" : 0,
    "active" : true
},{
    "_id" : ObjectId("5e7c552a582077bf00e80ad9"),
    "active" : true,
    "protocol" : "REST",
    "method" : "PATCH",
    "dataFormat" : "application/json",
    "name" : "Change rule state",
    "displayName" : "Kích hoạt, hủy kích hoạt luật tự động",
    "description" : "Kích hoạt, hủy kích hoạt luật tự động",
    "url" : "http://automatic-service:3030/automatic-rules",
    "params" : [
        {
            "field" : "",
            "_id" : ObjectId("5e7c552a58207748dfe80adc"),
            "name" : "Authorization",
            "displayName" : "",
            "description" : "",
            "type" : "STRING",
            "range" : []
        },
        {
            "field" : "PARAM",
            "_id" : ObjectId("5e7c552a58207783f0e80adb"),
            "name" : "_id",
            "displayName" : "Luật tự động",
            "description" : "Chọn một luật tự động của bạn",
            "type" : "STRING",
            "range" : [],
            "configHint" : "ruleId"
        },
        {
            "field" : "DATA",
            "_id" : ObjectId("5e7c552a5820772ddfe80ada"),
            "name" : "active",
            "displayName" : "Hành động",
            "description" : "Chọn kích hoạt hoặc hủy kích hoạt luật tự động",
            "type" : "BOOLEAN",
            "range" : [
                {
                    "step" : 0,
                    "_id" : ObjectId("5e7c8bb35820774a6fe80ae2"),
                    "name" : "Kích hoạt",
                    "value" : true
                },
                {
                    "step" : 0,
                    "_id" : ObjectId("5e7c8bb3582077cdb8e80ae1"),
                    "name" : "Hủy kích hoạt",
                    "value" : false
                }
            ],
            "configHint" : ""
        }
    ],
    "pluginId" : ObjectId("5ad95d2d58a16800066e1637"),
    "createdAt" : ISODate("2020-03-26T14:09:30.257+07:00"),
    "updatedAt" : ISODate("2021-01-04T16:32:09.827+07:00"),
    "__v" : 0
}])
