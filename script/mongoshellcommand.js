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
   "name" : "device",
   "permissions" : [
       {
           "forbidden" : true,
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
           "limit" : {
               "custom" : [],
               "restrict" : [
                   {
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
           "limit" : {
               "restrict" : [],
               "custom" : [],
               "whiteList" : [],
               "blackList" : []
           },
           "url" : "devices-schedule",
           "method" : "find"
       }
   ],
   "__v" : 0
})
db.usersroles.deleteOne({"name" : "user"});
db.usersroles.insert({
   "name" : "user",
   "permissions" : [
       {
           "forbidden" : false,
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
           "limit" : {
               "custom" : [],
               "restrict" : [
                   {
                       "entity" : "payload",
                       "idField" : "userId",
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
           "method" : "patch",
           "url" : "devices-properties-update"
       },
       {
           "forbidden" : false,
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
           "limit" : {
               "custom" : [
                   {
                       "range" : [
                           "user"
                       ],
                       "default" : [
                           "user"
                       ],
                       "field" : "roles"
                   }
               ],
               "restrict" : [
                   {
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
           "limit" : {
               "custom" : [
                   {
                       "range" : [],
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
           "url" : "devices-schedule-groups",
           "method" : "all",
           "limit" : {
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
           }
       },
       {
           "forbidden" : false,
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
           "url" : "devices-schedule-update",
           "method" : "patch",
           "limit" : {
               "custom" : [],
               "restrict" : [],
               "whiteList" : [],
               "blackList" : []
           }
       },
       {
           "forbidden" : false,
           "url" : "automatic-rules",
           "method" : "all",
           "limit" : {
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
           }
       }
   ],
   "__v" : 0
})
