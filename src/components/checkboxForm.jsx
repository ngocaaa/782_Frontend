import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js';

<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
        
<form action="#">
    <p>
        <label>
            <input type="checkbox" />
            <span>Red</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" checked="checked" />
            <span>Yellow</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" />
            <span>Filled in</span>
        </label>
    </p>
    <p>
        <label>
            <input id="indeterminate-checkbox" type="checkbox" />
            <span>Indeterminate Style</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" checked="checked" disabled="disabled" />
            <span>Green</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" disabled="disabled" />
            <span>Brown</span>
        </label>
    </p>
</form>
