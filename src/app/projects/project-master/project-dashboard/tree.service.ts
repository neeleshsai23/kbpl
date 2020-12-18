import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  
  constructor(private http: HttpClient) { 
    
    this.treeData = {
      "data": [
        {
          "label": "Corporate Office",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-clipboard cs-blue",
          "collapsedIcon": "fa fa-clipboard cs-blue",
          "selectable": false,
          "expanded": true,
          "children": [{
            "label": "Ideation",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": true,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "Concept Development",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "Product Development",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "Kitchen Implementation",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          }
        ]
      },
      {
        "label": "Warehouse",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Ideation",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "Concept Development",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "Product Development",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "Kitchen Implementation",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        }
      ]
    },{
      "label": "BAUNE",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-clipboard cs-blue",
      "collapsedIcon": "fa fa-clipboard cs-blue",
      "selectable": false,
      "expanded": false,
      "children": [{
        "label": "Ideation",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "Concept Development",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "Product Development",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "Kitchen Implementation",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      }
    ]
  },{
    "label": "BGSB",
    "data": "Documents Folder",
    "expandedIcon": "fa fa-clipboard cs-blue",
    "collapsedIcon": "fa fa-clipboard cs-blue",
    "selectable": false,
    "expanded": false,
    "children": [{
      "label": "Ideation",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "Concept Development",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "Product Development",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "Kitchen Implementation",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    }
  ]
},
]
}
}
treeData: any;

public getTreeJSON() {
  return this.treeData;
}
}
