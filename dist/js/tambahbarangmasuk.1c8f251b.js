(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tambahbarangmasuk"],{"0094":function(t,e,a){},"23bf":function(t,e,a){"use strict";var i=a("80d2"),n=a("2b0e");e["a"]=n["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(i["c"])(this.height),a=Object(i["c"])(this.minHeight),n=Object(i["c"])(this.minWidth),s=Object(i["c"])(this.maxHeight),r=Object(i["c"])(this.maxWidth),o=Object(i["c"])(this.width);return e&&(t.height=e),a&&(t.minHeight=a),n&&(t.minWidth=n),s&&(t.maxHeight=s),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},2677:function(t,e,a){"use strict";var i=a("8654"),n=(a("7e63"),a("d9bd")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},r={name:"v-textarea",extends:i["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return s({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||i["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(n["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},o=a("7cf7"),u=a("ab6d");a.d(e,"a",function(){return l});var l={functional:!0,$_wrapperFor:i["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var a=e.props,s=e.data,c=e.slots,h=e.parent;Object(u["a"])(s);var d=Object(o["a"])(c(),t);return a.textarea&&Object(n["d"])("<v-text-field textarea>","<v-textarea outline>",l,h),a.multiLine&&Object(n["d"])("<v-text-field multi-line>","<v-textarea>",l,h),a.textarea||a.multiLine?(s.attrs.outline=a.textarea,t(r,s,d)):t(i["a"],s,d)}}},"26e5":function(t,e,a){},"2db4":function(t,e,a){"use strict";a("0094");var i=a("b64a"),n=a("98a1"),s=a("c22b"),r=a("58df");e["a"]=Object(r["a"])(i["a"],n["a"],Object(s["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{autoHeight:Boolean,multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--auto-height":this.autoHeight,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(function(){t.isActive=!1},this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},this.isActive&&[t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"4bd4":function(t,e,a){"use strict";a("26e5");var i=a("94ab");e["a"]={name:"v-form",mixins:[Object(i["b"])("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",function(a){e.$set(e.errorBag,t._uid,a)},{immediate:!0})},i={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))}):i.valid=a(t),i},validate:function(){var t=this.inputs.filter(function(t){return!t.validate(!0)}).length;return!t},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var a=this.watchers.find(function(t){return t._uid===e._uid});a.valid&&a.valid(),a.shouldValidate&&a.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},"7e63":function(t,e,a){},"875f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"rounded-card"},[a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{rules:t.jumlahRules,label:"Nama Barang",required:""},model:{value:t.namabarang,callback:function(e){t.namabarang=e},expression:"namabarang"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-select",{attrs:{items:t.items,"item-text":"satuan_barang","item-value":"id_satuan",label:"Satuan Barang"},model:{value:t.satuan,callback:function(e){t.satuan=e},expression:"satuan"}})],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"rounded-card"},[a("v-container",[a("v-layout",[a("v-flex",{attrs:{lg4:""}},[a("v-text-field",{attrs:{rules:t.jumlahRules,label:"Kategori Barang",required:""},model:{value:t.kategoribarang,callback:function(e){t.kategoribarang=e},expression:"kategoribarang"}})],1),a("v-flex",{attrs:{lg4:""}},[a("v-text-field",{attrs:{rules:t.jumlahRules,label:"Harga Barang",required:""},model:{value:t.hargabarang,callback:function(e){t.hargabarang=e},expression:"hargabarang"}})],1),a("v-flex",{attrs:{lg4:""}},[a("v-text-field",{attrs:{rules:t.jumlahRules,label:"Jumlah Stok",required:""},model:{value:t.jumlahstok,callback:function(e){t.jumlahstok=e},expression:"jumlahstok"}})],1)],1)],1),a("v-btn",{staticClass:"rounded-card",attrs:{type:"submit",disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("Submit")]),a("v-btn",{staticClass:"rounded-card",attrs:{color:"error"},on:{click:t.reset}},[t._v("Reset Data")])],1)],1)],1)],1),a("v-snackbar",{attrs:{"multi-line":"",timeout:t.timeout,top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.snackbar_message)+"\n      "),a("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)},n=[],s=a("bc3a"),r=a.n(s),o={data:function(){return{valid:!0,snackbar:!1,timeout:6e3,items:[],jumlah:"",satuan:"",diskon:"",snackbar_message:"Tidak ada aksi",jumlahRules:[function(t){return!!t||"Jumlah harus diisi"}],diskonRules:[function(t){return!!t||"Diskon harus diisi"}],select:null,checkbox:!1,not_empty:[function(t){return!!t||"Alamat tidak boleh Kosong"}]}},created:function(){var t=this;r.a.get("http://ud-thoha-rest.site/api/kategori/satuan",{headers:{udthoha_token:"zQR6XBteZjmTGq0onbc5"}}).then(function(e){t.items=e.data.data})},methods:{validate:function(){var t=this;if(this.$refs.form.validate()){var e={nama:"Kategori Tiga",id_satuan:this.satuan,jumlah:this.jumlah,diskon:this.diskon};r.a.post("http://ud-thoha-rest.site/api/kategori/harga",e,{headers:{udthoha_token:"zQR6XBteZjmTGq0onbc5"}}).then(function(){t.snackbar_message="Data sudah di Submit",t.snackbar=!0})}},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},u=o,l=(a("c162"),a("2877")),c=a("6544"),h=a.n(c),d=a("8336"),v=a("b0af"),f=a("a523"),m=a("0e8f"),b=a("4bd4"),p=a("a722"),g=a("b56d"),k=a("2db4"),x=a("2677"),w=Object(l["a"])(u,i,n,!1,null,"819facbe",null);e["default"]=w.exports;h()(w,{VBtn:d["a"],VCard:v["a"],VContainer:f["a"],VFlex:m["a"],VForm:b["a"],VLayout:p["a"],VSelect:g["a"],VSnackbar:k["a"],VTextField:x["a"]})},"97d9":function(t,e,a){},b0af:function(t,e,a){"use strict";a("4c94"),a("d0e7");var i=a("b64a"),n=a("2b0e");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r=n["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?s({},"elevation-"+this.computedElevation,!0):{}}}}),o=a("23bf"),u=a("6a18"),l=a("58df"),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},h=Object(l["a"])(i["a"],r,o["a"],u["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return c({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),d=h,v=a("0d01"),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e["a"]=Object(l["a"])(v["a"],d).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return f({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},d.options.computed.classes.call(this))},styles:function(){var t=f({},d.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),a=e.tag,i=e.data;return i.style=this.styles,t(a,this.setBackgroundColor(this.color,i),this.$slots.default)}})},c162:function(t,e,a){"use strict";var i=a("97d9"),n=a.n(i);n.a},d0e7:function(t,e,a){}}]);
//# sourceMappingURL=tambahbarangmasuk.1c8f251b.js.map