(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{248:function(t,e,n){"use strict";(function(t){var o=n(2);n(29);e.a={data:function(){return{clientId:t.env.clientId}},methods:{login:function(){this.$router.push("https://github.com/login/oauth/authorize?client_id=".concat(t.env.client_id))},octokit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/",e.next=3,t.$axios.$get("https://cors-anywhere.herokuapp.com/https://api.github.com/user");case 3:return n=e.sent,o=n.login,console.log("LOGIN: ",o," TOKEN: ",t.$auth.strategy.token.get()),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))()},logout:function(){this.$auth.logout(),this.$nuxt.refresh()}}}}).call(this,n(63))},263:function(t,e,n){"use strict";n.r(e);var o=n(248).a,r=n(23),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",[t._v("Hello World")]),t._v(" "),t.$store.state.auth.loggedIn?[n("p",[t._v("TOKEN: ["+t._s(this.$store.state.auth.accessToken)+"]")]),t._v(" "),n("button",{staticClass:"ml-3",attrs:{variant:"danger"},on:{click:t.logout}},[t._v(" Logout ")]),t._v(" "),n("button",{on:{click:t.octokit}},[t._v("OCTOKIT")])]:t._e(),t._v(" "),[n("a",{attrs:{href:"https://github.com/login/oauth/authorize?client_id="+t.clientId}},[t._v("LOGIN LINK")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:t.login}},[t._v("LOGIN")])]],2)}),[],!1,null,null,null);e.default=component.exports}}]);