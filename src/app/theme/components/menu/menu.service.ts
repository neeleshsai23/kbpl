import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Menu } from './menu.model';
//import { verticalMenuItems, horizontalMenuItems } from './menu';

@Injectable()
export class MenuService {
  
  verticalMenuItems: any;
  horizontalMenuItems: any;
  userType: any;
  constructor(private location: Location, private router: Router) {
    this.userType = localStorage.getItem('userType');
    let permissions = [];
    let showMainMenus = {"admin":true};
    // if(localStorage.getItem('trs_user_info')) {
    //     let temp = JSON.parse(localStorage.getItem('trs_user_info')).user_permissions;
    //     // if(temp[1]['permission_type'].split('')[1] === '0' && temp[0]['permission_type'].split('')[1] === '0') 
    //     //     showMainMenus['analytics'] = false;
    //     // if(temp[2]['permission_type'].split('')[1] === '0' && temp[3]['permission_type'].split('')[1] === '0' && temp[6]['permission_type'].split('')[1] === '0' && temp[7]['permission_type'].split('')[1] === '0') 
    //     //     showMainMenus['marketing'] = false;
    //     // if(temp[5]['permission_type'].split('')[1] === '0' && temp[4]['permission_type'].split('')[1] === '0') 
    //     //     showMainMenus['sales'] = false;
    //     if(temp[8]['permission_type'].split('')[1] === '0' && temp[9]['permission_type'].split('')[1] === '0' && temp[10]['permission_type'].split('')[1] === '0' && temp[11]['permission_type'].split('')[1] === '0' && temp[12]['permission_type'].split('')[1] === '0') 
    //         showMainMenus['admin'] = false;
    //     for(let i=0; i< temp.length; i++) {
    //         permissions[i] = temp[i]['permission_type'].split('')[1] != '0' ? true : false;
    //     }
    // }
    
    let temp = [];
    
    temp.push(
      new Menu(1, 'Radar', '/mrc/radar', null, 'analytics', null, true, 0, "white", true),
      new Menu(2, 'Clients', '/mrc/clients', null, 'account_circle', null, true, 0, "white", true),
      new Menu(6, 'Contractors', '/mrc/contractors', null, 'groups', null, true, 0, "white", true),
      new Menu(9, 'Projects', '/mrc/projects', null, 'business_center', null, true, 0, "white", true),

      new Menu(3, 'Contracts', '/mrc/contracts', null, 'engineering', null, true, 0, "white", true),
      new Menu(4, 'Stores', '/mrc/stores', null, 'subscriptions', null, true, 0, "white", true),
      new Menu(5, 'Purchase', '/mrc/purchase', null, 'request_quote', null, true, 0, "white", true),
      new Menu(9, 'Resources', '/mrc/resources', null, 'equalizer', null, true, 0, "white", true),

      // new Menu(6, 'HR', '/mrc/hr', null, 'group', null, true, 0, "white", true),

      new Menu(7, 'Finance', '/mrc/accounting', null, 'account_balance', null, true, 0, "white", true),
      new Menu(8, 'Admin', '/mrc/admin', null, 'admin_panel_settings', null, true, 0, "white", true),
     /* new Menu(9, 'Project Management', '/mrc/projects/project-management', null, 'label', null, true, 3, "white", true),
      new Menu(10, 'Billing', '/mrc/projects/billing', null, 'grading', null, true, 3, "white", true),
      new Menu(11, 'Bill of Quantities', '/mrc/projects/bill-of-quantities', null, 'leaderboard', null, true, 3, "white", true),
      new Menu(12, 'Closing', '/mrc/projects/closing', null, 'picture_in_picture_alt', null, true, 3, "white", true),
      new Menu(13, 'Documents & Drawing', '/mrc/projects/documents-and-drawing', null, 'view_quilt', null, true, 3, "white", true),
      new Menu(14, 'Project Planning', '/mrc/projects/project-planning', null, 'archive', null, true, 3, "white", true),
      new Menu(15, 'Project Site', '/mrc/projects/project-site', null, 'flag', null, true, 3, "white", true),*/

      new Menu(16, 'Inventory', '/mrc/stores/inventory', null, 'widgets', null, true, 4, "white", true),
      new Menu(17, 'Fixed Assets', '/mrc/stores/fixed-assets', null, 'business_center', null, true, 4, "white", true),
      new Menu(18, 'Vehicles', '/mrc/stores/vechiles', null, 'web_asset', null, true, 4, "white", true),
      new Menu(19, 'Reconciliations', '/mrc/stores/reconciliations', null, 'payments', null, true, 4, "white", true),
      new Menu(20, 'Rentals', '/mrc/stores/rentals', null, 'group', null, true, 4, "white", true),

      new Menu(21, 'Orders', '/mrc/purchase/orders', null, 'business_center', null, true, 5, "white", true),
      new Menu(22, 'Records', '/mrc/purchase/records', null, 'local_shipping', null, true, 5, "white", true),
      new Menu(23, 'Tenders', '/mrc/purchase/tenders', null, 'request_quote', null, true, 5, "white", true),
      
      // new Menu(24, 'ERM', '/mrc/hr/ERM', null, 'groups', null, true, 6, "white", true),
      // new Menu(25, 'Hiring', '/mrc/hr/hiring', null, 'receipt_long', null, true, 6, "white", true),
      // //new Menu(26, 'Employee Details', '/mrc/hr/employee-details', null, 'account_tree', null, true, 6, "white", true),
      // new Menu(27, 'Project Wise Details', '/mrc/hr/project-wise-details', null, 'swap_horiz', null, true, 6, "white", true),

      new Menu(28, 'Bank', '/mrc/accounting/bank', null, 'attach_money', null, true, 7, "white", true),
      new Menu(29, 'Invoices', '/mrc/accounting/invoices', null, 'receipt_long', null, true, 7, "white", true),
      new Menu(30, 'Ledger', '/mrc/accounting/ledger', null, 'account_balance_wallet', null, true, 7, "white", true),
      new Menu(31, 'Payables', '/mrc/accounting/payable', null, 'attach_money', null, true, 7, "white", true),
      new Menu(32, 'Receivables', '/mrc/accounting/receivables', null, 'analytics', null, true, 7, "white", true),
      new Menu(33, 'Renewals', '/mrc/accounting/renewals', null, 'layers', null, true, 7, "white", true),
      new Menu(34, 'Taxes', '/mrc/accounting/taxes', null, 'announcement', null, true, 7, "white", true),
     




      new Menu(35, 'Kanban', '/mrc/admin/steps', null, 'swap_horiz', null, true, 8, "white",true),
      new Menu(36,'Master Data', '/mrc/admin/masterdata', null,'edit_location', null, true, 8,"white",true),
      new Menu(37, 'Users and Roles', '/mrc/admin/users', null, 'group_add', null, false, 8, "white",true),
      // new Menu(38, 'Kanban', '/mrc/admin/steps', null, 'swap_horiz', null, true, 5, "white",true),
      new Menu(39, 'Settings', '/mrc/admin/settings', null, 'settings_applications', null, false, 8, "white",true),
      new Menu(40, 'Lookup', '/mrc/admin/lookup', null, 'zoom_in', null, false, 8, "white",true),
      
      
      // new Menu(5, 'Settings', '/hospitalbuddy/owner/settings', null, 'settings', null, false, 0, "white", true)
      );
      
      
      this.verticalMenuItems = temp;
      this.horizontalMenuItems = temp;
    }
    
    public getVerticalMenuItems(): Array<Menu> {
      return this.verticalMenuItems;
    }
    
    public getHorizontalMenuItems(): Array<Menu> {
      return this.horizontalMenuItems;
    }
    
    public expandActiveSubMenu(menu: Array<Menu>) {
      let url = this.location.path();
      let routerLink = url; // url.substring(1, url.length);
      let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
      if (activeMenuItem[0]) {
        let menuItem = activeMenuItem[0];
        while (menuItem.parentId != 0) {
          let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
          menuItem = parentMenuItem;
          this.toggleMenuItem(menuItem.id);
        }
      }
    }
    
    public toggleMenuItem(menuId) {
      let menuItem = document.getElementById('menu-item-' + menuId);
      let subMenu = document.getElementById('sub-menu-' + menuId);
      if (subMenu) {
        if (subMenu.classList.contains('show')) {
          subMenu.classList.remove('show');
          menuItem.classList.remove('expanded');
        }
        else {
          subMenu.classList.add('show');
          menuItem.classList.add('expanded');
        }
      }
    }
    
    public closeOtherSubMenus(menu: Array<Menu>, menuId) {
      let currentMenuItem = menu.filter(item => item.id == menuId)[0];
      if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
        menu.forEach(item => {
          if (item.id != menuId) {
            let subMenu = document.getElementById('sub-menu-' + item.id);
            let menuItem = document.getElementById('menu-item-' + item.id);
            if (subMenu) {
              if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
              }
            }
          }
        });
      }
    }
    
    
  }
  