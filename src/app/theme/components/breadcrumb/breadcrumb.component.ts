import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
    
    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = 'test';
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    }[] = [];
    
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
            this.settings = this.appSettings.settings;
            this.description = {
                "Users":"This screen is intended to control the list of allocated users based on the type of role",
                "Lookup":"From this panel, all of the application preferences and lookup options are preserved",
                "Settings":"The default settings for the entire application can be handled here",
                "Checklist":"This page is used to create a checklist for qualification of prospect",
                "Master Data":"The Locations screen is used to display the list of countries along with an edit / delete action column to manage contact information for leads and prospects",
                "Manage Kanban for Projects": 'This screen is intended to incorporate and control the Kanban measures that are retained in the kanban-view',
                "Radar":"The overall summary of System Activity, Usage and Statistics are provided in this screen",
                "Clients":"The list of clients information associated to the projects is listed here. Ability to add and manage client information can be done here",
                "Logistics":"To view all the details of a shipment and to track them accordingly is provided here in this screen",
                "Projects":"This Screen is used to add and manage the Projects in the Organization",
                "Carriers":"fdg",
                "Grid View":"The list of clients information associated to the projects is listed here. Ability to add and manage client information can be done here",
                "Map View":"The location of all the clients based on the city is listed in this screen",
                "Activity": "The timeline of the Project updates appears here",
                "Project Dashboard": "Activities that are carried on selected project can be viewed and managed",
                "Message Center" : "All messages can be viewed here",
                "Tracking":"This screen is used to track shipments",
                "Permissions":"All the screen level and special permissions for users can be managed from this screen",
                "Purchase" :"dsds",
                "Resources":"This is resources screen",
                "Inventory":"This screen is used to view and manage inventory",
                "Orders":{
                    "Quotations":"This screen is used to view and manage quotations",
                    "Orders":"This screen is used to view and manage Orders",
                    "POs":"This screen is used to view and manage POs",
                    "Bills & Receivables":"This screen is used to view and manage bills and receivables",
                    "Tracking":"This screen is used to view the tracking information",
                    "WO":"This screen is used to view and manage WO"
                },
                "Records":{
                    "Material Rates":"This screen is used to view and manage material list",
                    "Records":"This screen is used to manage Records"
                },
                "Tenders":"This screen is used to view and manage tenders",
                "Contracts": "This is Contracts Screen",
                "Contract Dashboard": "This is Contract Dashboard Screen",
                "Contractors": "This Screen is used to add and manage the Contractors",
                "Stores": "This is Stores Screen",
                "Finance": "This is Finance Screen",
                "Vehicles":"This is Vehicles Screen",
                "Reconciliations": "This is Renconciliations Screen",
                "Fixed Assets": "This is Fixed Assets Screen",
                "Rentals": "This is Rentals Screen",
                "Order Requests": "This Screen is used to request for an item pertaining to respective sites"
                // "Quotations":"ds"
            };
            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.breadcrumbs = [];
                    this.parseRoute(this.router.routerState.snapshot.root);
                    this.pageTitle = '';
                    this.breadcrumbs.forEach(breadcrumb => {
                        this.pageTitle += ' | ' + breadcrumb.name;
                    })
                    this.pageTitle ? null : this.pageTitle = ' | Dashboard';
                    var temp = this.pageTitle.split(' | ');
                    console.log(temp,"temp")
                    if (temp.length > 5) {
                        this.subTitle = temp.pop();
                        this.moduleTitle = temp[temp.length - 1];
                    } else if (temp.length > 4) {
                        this.subTitle = temp.pop();
                        this.moduleTitle = temp[temp.length - 1];
                    } else if (temp.length > 3) {
                        this.subTitle = temp.pop();
                        this.moduleTitle = temp[temp.length - 1];
                    } else {
                        this.moduleTitle = temp.pop();
                    }
                    if (this.subTitle === 'Permissions') {
                        this.moduleTitle = 'Permissions';
                        this.subTitle = 'test';
                    }
                    this.title.setTitle(this.settings.name + this.pageTitle);
                }
            })
        }
        
        private parseRoute(node: ActivatedRouteSnapshot) {
            if (node.data['breadcrumb']) {
                if (node.url.length) {
                    let urlSegments: UrlSegment[] = [];
                    node.pathFromRoot.forEach(routerState => {
                        urlSegments = urlSegments.concat(routerState.url);
                    });
                    let url = urlSegments.map(urlSegment => {
                        return urlSegment.path;
                    }).join('/');
                    this.breadcrumbs.push({
                        name: node.data['breadcrumb'],
                        url: '/' + url
                    })
                }
            }
            if (node.firstChild) {
                this.parseRoute(node.firstChild);
            }
            console.log(this.breadcrumbs)
        }
        
        public closeSubMenus() {
            let menu = document.querySelector('.sidenav-menu-outer');
            if (menu) {
                for (let i = 0; i < menu.children[0].children.length; i++) {
                    let child = menu.children[0].children[i];
                    if (child) {
                        if (child.children[0].classList.contains('expanded')) {
                            child.children[0].classList.remove('expanded');
                            child.children[1].classList.remove('show');
                        }
                    }
                }
            }
        }
    }
    
    
    