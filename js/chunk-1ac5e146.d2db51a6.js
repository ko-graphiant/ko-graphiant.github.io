(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ac5e146"],{"972a":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("DataTable",{attrs:{value:e.products,contextMenu:"",contextMenuSelection:e.selectedProduct,responsiveLayout:"scroll"},on:{"update:contextMenuSelection":function(t){e.selectedProduct=t},"update:context-menu-selection":function(t){e.selectedProduct=t},"row-contextmenu":e.onRowContextMenu}},[t("Column",{attrs:{field:"code",header:"Code"}}),t("Column",{attrs:{field:"name",header:"Name"}}),t("Column",{attrs:{field:"category",header:"Category"}}),t("Column",{attrs:{field:"price",header:"Price"},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v("\n                            "+e._s(e.formatCurrency(t.data.price))+"\n                        ")]}}])})],1)],1),t("ContextMenu",{ref:"cm",attrs:{model:e.menuModel}})],1),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v('\n<DataTable :value="products" contextMenu :contextMenuSelection.sync="selectedProduct" @row-contextmenu="onRowContextMenu" responsiveLayout="scroll">\n    <Column field="code" header="Code"></Column>\n    <Column field="name" header="Name"></Column>\n    <Column field="category" header="Category"></Column>\n    <Column field="price" header="Price">\n        <template #body="slotProps">\n            {{formatCurrency(slotProps.data.price)}}\n        </template>\n    </Column>\n</DataTable>\n\n<ContextMenu :model="menuModel" ref="cm" />\n')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v("\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            products: null,\n            selectedProduct: null,\n            menuModel: [\n                {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct)},\n                {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct)}\n            ]\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    },\n    methods: {\n        onRowContextMenu(event) {\n            this.$refs.cm.show(event.originalEvent);\n        },\n        viewProduct(product) {\n            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: product.name});\n        },\n        deleteProduct(product) {\n            this.products = this.products.filter((p) => p.id !== product.id);\n            this.$toast.add({severity: 'info', summary: 'Product Deleted', detail: product.name});\n            this.selectedProduct = null;\n        },\n        formatCurrency(value) {\n            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});\n        }\n    }\n}\n")])],1)],1)],1)])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("ContextMenu")])]),t("p",[e._v("CDataTable has exclusive integration with ContextMenu.")])])])}],c=(n("7f7f"),n("e9c0")),u={data:function(){var e=this;return{products:null,selectedProduct:null,menuModel:[{label:"View",icon:"pi pi-fw pi-search",command:function(){return e.viewProduct(e.selectedProduct)}},{label:"Delete",icon:"pi pi-fw pi-times",command:function(){return e.deleteProduct(e.selectedProduct)}}]}},productService:null,created:function(){this.productService=new c["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))},methods:{onRowContextMenu:function(e){this.$refs.cm.show(e.originalEvent)},viewProduct:function(e){this.$toast.add({severity:"info",summary:"Product Selected",detail:e.name})},deleteProduct:function(e){this.products=this.products.filter((function(t){return t.id!==e.id})),this.$toast.add({severity:"info",summary:"Product Deleted",detail:e.name}),this.selectedProduct=null},formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},i=u,d=n("2877"),a=Object(d["a"])(i,o,r,!1,null,null,null);t["default"]=a.exports},e9c0:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("d225"),r=n("b0b4"),c=function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}])}()}}]);