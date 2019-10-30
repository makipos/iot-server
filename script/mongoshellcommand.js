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
   "name" : "admin",
   "permissions" : [
       {
           "url" : "all",
           "method" : "all",
           "limit" : {
               "custom" : [],
               "restrict" : []
           }
       }
   ]
});
db.usersroles.deleteOne({"name" : "device"});
db.usersroles.insert({
    "_id" : ObjectId("5c2c79a7a8334c194b1a6648"),
    "updatedAt" : ISODate("2019-10-15T03:40:39.862Z"),
    "createdAt" : ISODate("2019-01-02T03:15:28.317Z"),
    "name" : "device",
    "permissions" : [
        {
            "forbidden" : true,
            "_id" : ObjectId("5c7353c47e770800063bb64c"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "create",
            "url" : "devices"
        },
        {
            "forbidden" : true,
            "_id" : ObjectId("5c7353c47e770800063bb64b"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "remove",
            "url" : "devices"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb64a"),
            "limit" : {
                "custom" : [],
                "restrict" : [
                    {
                        "_id" : ObjectId("5c73ed080702f20006d8498d"),
                        "entity" : "payload",
                        "idField" : "deviceId",
                        "ownerField" : "_id"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "all",
            "url" : "devices"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5d808a513013f200083b36fd"),
            "url" : "devices-virtuals",
            "method" : "all",
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb649"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "find",
            "url" : "devices-types"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb648"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "get",
            "url" : "devices-types"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb647"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "find",
            "url" : "devices-properties"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb646"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "get",
            "url" : "devices-properties"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb645"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "create",
            "url" : "relations"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb644"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "remove",
            "url" : "relations"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb643"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "find",
            "url" : "relations-getchilds"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb642"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "get",
            "url" : "relations-getchilds"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb641"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "find",
            "url" : "relations-getparents"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c7353c47e770800063bb640"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "get",
            "url" : "relations-getparents"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c9dd4162116130006d8949f"),
            "limit" : {
                "restrict" : [],
                "custom" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "url" : "devices-schedule",
            "method" : "get"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c9dd4162116130006d8949e"),
            "limit" : {
                "restrict" : [],
                "custom" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "url" : "devices-schedule",
            "method" : "find"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5cf725842bd1d70006548582"),
            "limit" : {
                "restrict" : [],
                "custom" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "url" : "automatic-rules",
            "method" : "find"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5ca31ef8ed05f60006ae5c13"),
            "limit" : {
                "custom" : [
                    {
                        "range" : [],
                        "_id" : ObjectId("5ca31ef8ed05f60006ae5c15"),
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "author"
                    },
                    {
                        "range" : [],
                        "_id" : ObjectId("5ca31ef8ed05f60006ae5c14"),
                        "force" : {
                            "entity" : "payload",
                            "idField" : "type"
                        },
                        "field" : "authorType"
                    },
                    {
                        "range" : [],
                        "_id" : ObjectId("5d9fe0e88ca24d000690ab5b"),
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
                            "5ca310342afab500063c7c72"
                        ],
                        "_id" : ObjectId("5ca31ef8ed05f60006ae5c16"),
                        "entity" : "user",
                        "idField" : "deviceTypeId"
                    }
                ],
                "blackList" : []
            },
            "url" : "devices-qc",
            "method" : "create"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5da53f6e80189a423fe32288"),
            "url" : "update-sln",
            "method" : "find",
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5da53f6e80189a647be32287"),
            "url" : "update-sln-properties",
            "method" : "find",
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            }
        }
    ],
    "__v" : 0
})
db.usersroles.deleteOne({"name" : "user"});
db.usersroles.insert({
    "_id" : ObjectId("5c2c7982a8334c194b1a65fb"),
    "updatedAt" : ISODate("2019-10-29T05:01:03.611Z"),
    "createdAt" : ISODate("2019-01-02T03:11:49.652Z"),
    "name" : "user",
    "permissions" : [
        {
            "forbidden" : true,
            "_id" : ObjectId("5d5bc855aa885000061cd12d"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "update",
            "url" : "all"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5d91d182f703010006390537"),
            "url" : "devices-get-type",
            "method" : "all",
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771e"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "find",
            "url" : "devices-types"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771d"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "get",
            "url" : "devices-types"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771c"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "find",
            "url" : "devices-properties"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771b"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "get",
            "url" : "devices-properties"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5db7c78fe46d94af8de79207"),
            "url" : "devices-events",
            "method" : "find",
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e0771a"),
            "limit" : {
                "custom" : [],
                "restrict" : [
                    {
                        "_id" : ObjectId("5c73eb260702f20006d847c6"),
                        "entity" : "payload",
                        "idField" : "userId",
                        "ownerField" : "relationsInfo.parentId"
                    },
                    {
                        "_id" : ObjectId("5c73eb260702f20006d847c5"),
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
            "method" : "patch",
            "url" : "devices-properties-update"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07719"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "create",
            "url" : "users"
        },
        {
            "forbidden" : true,
            "_id" : ObjectId("5c735372e3a1190006e07718"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "remove",
            "url" : "users"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07717"),
            "limit" : {
                "custom" : [
                    {
                        "range" : [
                            "user"
                        ],
                        "_id" : ObjectId("5c735419e3a1190006e0772c"),
                        "default" : [
                            "user"
                        ],
                        "field" : "roles"
                    },
                    {
                        "range" : [],
                        "_id" : ObjectId("5daac0e74065fee8589b11bd"),
                        "force" : {
                            "clear" : true
                        },
                        "field" : "manufacturerId"
                    }
                ],
                "restrict" : [
                    {
                        "_id" : ObjectId("5c73eb260702f20006d847c0"),
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "_id"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "all",
            "url" : "users"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5daac0e74065febe9a9b11bb"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "all",
            "url" : "users-control-devices"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5d7a0e8841f8fa0006423220"),
            "url" : "users-active-schemas",
            "method" : "create",
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07716"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "create",
            "url" : "relations"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07715"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "remove",
            "url" : "relations"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07714"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "find",
            "url" : "relations-getchilds"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07713"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "get",
            "url" : "relations-getchilds"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07712"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "find",
            "url" : "relations-getparents"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c735372e3a1190006e07711"),
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "get",
            "url" : "relations-getparents"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c94af8d40c2e5000665e970"),
            "limit" : {
                "custom" : [
                    {
                        "range" : [],
                        "_id" : ObjectId("5c94af8d40c2e5000665e971"),
                        "force" : {
                            "entity" : "user",
                            "idField" : "_id"
                        },
                        "field" : "userId"
                    }
                ],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            },
            "method" : "create",
            "url" : "users-feedbacks"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c9dd3b62116130006d89483"),
            "url" : "devices-schedule-groups",
            "method" : "all",
            "limit" : {
                "custom" : [],
                "restrict" : [
                    {
                        "_id" : ObjectId("5c9dd3b62116130006d89484"),
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "author"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c9dd3b62116130006d89482"),
            "url" : "devices-schedule-add",
            "method" : "create",
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c9dd3b62116130006d89481"),
            "url" : "devices-schedule-update",
            "method" : "all",
            "limit" : {
                "custom" : [],
                "restrict" : [],
                "whiteList" : [],
                "blackList" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5c9ddc382116130006d894b8"),
            "url" : "automatic-rules",
            "method" : "all",
            "limit" : {
                "custom" : [],
                "restrict" : [
                    {
                        "_id" : ObjectId("5c9ddc382116130006d894b9"),
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "author"
                    }
                ],
                "whiteList" : [],
                "blackList" : []
            }
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5d4e89ce628450000632e34e"),
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "url" : "users-ip-to-location",
            "method" : "all"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5d4e89ce628450000632e34d"),
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [],
                "custom" : []
            },
            "url" : "users-weather",
            "method" : "all"
        },
        {
            "forbidden" : false,
            "_id" : ObjectId("5d71de5dc529450006a80cfc"),
            "url" : "users-schemas",
            "method" : "all",
            "limit" : {
                "whiteList" : [],
                "blackList" : [],
                "restrict" : [
                    {
                        "_id" : ObjectId("5d71de5dc529450006a80cfd"),
                        "entity" : "user",
                        "idField" : "_id",
                        "ownerField" : "author"
                    }
                ],
                "custom" : []
            }
        }
    ],
    "__v" : 0
})
