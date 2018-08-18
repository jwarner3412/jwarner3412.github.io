 /**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Skills and Certifications</h1>
        <ul>
          <li>Advanced understanding of electronic systems</li>
          <li>Strong knowledge of multiplexing and computerized diagnostics</li>
          <li>Ability to read and comprehend written instructions and diagrams/schematics</li>
          <li>High mechanical aptitude on complex assemblies with close attention to detail</li>
          <li>Fluent in metric and imperial system, strong in complex math</li>
          <li>Ability to work independently and as part of a team </li>
          <li>Have experience in circuit board repair, i.e. replace components or repair circuit traces via solder connections</li>
          <li>Quick and motivated learner</li>
          <li>Experience in BMW/Mini, VW/Audi, and all major asian and domestic pass. vehicle manufacturers</li>
          <li>ASE Certified: Advanced Level Engine Specialist, Brakes, Electrical Systems, Steering and Suspension</li>
          <li>Ford Certified Steering and Suspension Specialist</li>
          <li>Ford Certified Advanced Electrical Systems Specialist</li>
          <li>Rhode Island State Safety and Emissions Inspector</li>
          <li>Proficient MIG welder</li>
          <li>Experience with ADP dealer management software and Microsoft Office</li>
          <li>Advanced Windows(XP thru 10) & Linux user, comfortable in command line environment</li>
          <li>Strong foundation in web coding and software development</li>
        </ul>
      </div>
      <div class="card">
        <h1>Education and Training</h1>
        <dl>
          <dt>Ford New England Training Center in Southborough, Mass.</dt>
          <dd>(See binder)</dd>
          <dt>“Up-sell Training” in Las Vegas through Flood Ford</dt>
          <dd>Focused on multipoint inspections, and presentation to the customer</dd>
          <dt>Snap-op Verus Training</dt>
          <dd>Advanced oscilloscope diagnostics</dd>
	        <dt>Firefighter for the Union Fire District for 8 years</dt>
    	    <dd>Nationally Certified 1041 &amp; 1403 Live Burn Instructor, Firefighter 1+2 Cert, Hazmat Ops Cert, Former Decon Team Member, Search and Rescue, RIT Certified</dd>
        </dl>
      </div>
      <div class="card">
        <h1>Work Experiance</h1>
        <dl>
          <h3>Flood Ford of Narragansett</h3>
          <dt><strong>Technician, 2005-2009</strong></dt>
          <dd>Worked as dispatcher, service writer, and parts specialist on understaffed or busy days</dd>
          <h3>Kingston Auto Sales</h3>
          <dt><strong>Technician, 2009-2011</strong></dt>
          <dd>Implemented record keeping and cost-tracking on used cars before being introduced to the lot for sale</dd>
          <dd>Assisted service writer with job sales (offered overview of line items to customer and provided the knowledge to allow the customer to make an informed decision)</dd>
          <dd>Implemented multi-point checks and an organized dispatch system</dd>
          <dd>Introduced shop-management software, established part and labor pricing system for consistent and profitable job sales</dd>
          <h3>Midas of Wakefield</h3>
          <dt><strong>Service Manager/Shop Foreman, 2011-2012</strong></dt>
          <dd>Responsibilities included:
          <ul><li>Scheduling appointments</li>
            <li>Job dispatching</li>
            <li>Daily profit tracking</li>
            <li>Inventory management</li>
            <li>Customer &amp; vendor invoice filing</li>
            <li>Job estimates, sales, and invoicing</li>
            <li>Repair quality checks</li>
            <li>Keeping office and customer area clean</li>
            <li>Maintained avg. weekly sales of $25K with 2 techs in the first 2 months of store opening</li>
            <li>Took repair jobs when not invested in office work</li>
          </ul></dd>
          <h3>Self-Employed</h3>
          <dt><strong>2012-2016</strong></dt>
          <dd>Grew loyal customer base over 4 years</dd>
          <dd>Offering online booking for customer convenience &amp; employee productivity</dd>
          <h3>Sampsons Automotive</h3>
          <dt><strong>Service Manager/Shop Foreman, 2016-2017</strong></dt>
          <dd>Responsibilities similar to position at Midas with greater emphasis on vehicle repairs</dd>
          <h3>Self-Employed</h3>
          <dt><strong>2017-Present</strong></dt>
        </dl>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
