import { Injectable } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root'
})
export class ContentListService {

    //our servcies items
    servicesItems = [
      { 
        title: 'CIVIL LITIGATION', 
        list: '<ul><li>Motor vehicle accident insurance claims</li><li>Action and application proceedings</li> <li>Evictions and Spoliation Proceedings </li> </ul>'
      },

      { 
        title: 'PERSONAL INJURY', 
        list: '<ul><li>Road Accident Fund Claims</li> <li>Silicosis and related Claims against Mines</li> <li>•	Medical Negligence</li></ul>'
      },

      { 
        title: 'ESTATES ADMIN', 
        list: '<ul><li>Drawing of Wills & Testaments </li> <li>Administration of testate and intestate estates</li> </ul>'
      },

      { 
        title: 'LABOUR LAW ', 
        list: '<ul><li>Advising clients on labour law matters</li> <li>Legal Representation in Arbitration and Labour Court</li> </ul>'
      },


    ];

  servicesList: { title: string; icon: string; list: string; }[] = [];

  constructor() { }

  getContentList() {
    return this.servicesItems; 
  }
}
