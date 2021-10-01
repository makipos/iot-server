/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  overview: [
    'overview/architecture',
    {
      type: 'category',
      label: 'Service',
      collapsible: true,
      collapsed: false,
      items: [
        'overview/service/database', 'overview/service/gateway',
        'overview/service/users_service', 'overview/service/devices_service',
        'overview/service/relations_service', 'overview/service/automatic_service',
        'overview/service/update_service', 'overview/service/webmanager'
      ]
    },
    {
      type: 'category',
      label: 'Bảo mật',
      collapsible: true,
      collapsed: false,
      items: [
        'overview/security/network', 'overview/security/mqtt', 'overview/security/http'
      ]
    },
    'overview/database_struct'
  ],
  'tutorial': [
    {
      type: 'category',
      label: 'Cài đặt',
      collapsible: true,
      collapsed: false,
      items: ['tutorial/install/installation', 'tutorial/install/verify']
    },
    'tutorial/folder_structure',
    {
      type: 'category',
      label: 'Cấu hình',
      collapsible: true,
      collapsed: false,
      items: ['tutorial/config/get_started', 'tutorial/config/domain', 'tutorial/config/ssl', 'tutorial/config/service']
    },
    {
      type: 'category',
      label: 'Kết nối',
      collapsible: true,
      collapsed: false,
      items: [{
        type: 'category',
        label: 'Cài đặt thiết bị IOT',
        collapsible: true,
        collapsed: false,
        items: [
          'tutorial/connect/wificonfig'
        ]
      }]
    },
    {
      type: 'category',
      label: 'Vận hành',
      collapsible: true,
      collapsed: false,
      items: ['tutorial/mantain/monitor', 'tutorial/mantain/logging', 'tutorial/mantain/database', 'tutorial/mantain/recover', 'tutorial/mantain/backup']
    },
  ]

};
