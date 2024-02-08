"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[911],{8604:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var l=i(5893),s=i(1151);const d={},t="Embedding",o={id:"customization/plugin/embedding",title:"Embedding",description:"In TaskWeaver, we support various embedding models to generate embeddings for auto plugin selection.",source:"@site/docs/customization/plugin/embedding.md",sourceDirName:"customization/plugin",slug:"/customization/plugin/embedding",permalink:"/TaskWeaver/docs/customization/plugin/embedding",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/customization/plugin/embedding.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Auto Plugin Selection",permalink:"/TaskWeaver/docs/customization/plugin/plugin_selection"},next:{title:"How to develop a new plugin",permalink:"/TaskWeaver/docs/plugin/how_to_develop_a_new_plugin"}},r={},c=[{value:"Embedding Configration",id:"embedding-configration",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"embedding",children:"Embedding"}),"\n",(0,l.jsx)(n.p,{children:"In TaskWeaver, we support various embedding models to generate embeddings for auto plugin selection."}),"\n",(0,l.jsx)(n.h2,{id:"embedding-configration",children:"Embedding Configration"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"llm.embedding_api_type"}),": The type of the embedding API. We support the following types:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"openai"}),"\n",(0,l.jsx)(n.li,{children:"qwen"}),"\n",(0,l.jsx)(n.li,{children:"ollama"}),"\n",(0,l.jsx)(n.li,{children:"sentence_transformers"}),"\n",(0,l.jsx)(n.li,{children:"glm"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"llm.embedding_model"}),": The embedding model name. The model name should be aligned with ",(0,l.jsx)(n.code,{children:"llm.embedding_api_type"}),".\nWe only list some embedding models we have tested below:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["openai","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"text-embedding-ada-002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["qwen","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"text-embedding-v1"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["ollama","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"llama2"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["sentence_transformers","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"all-mpnet-base-v2"}),"\n",(0,l.jsx)(n.li,{children:"multi-qa-mpnet-base-dot-v1"}),"\n",(0,l.jsx)(n.li,{children:"all-distilroberta-v1"}),"\n",(0,l.jsx)(n.li,{children:"all-MiniLM-L12-v2"}),"\n",(0,l.jsx)(n.li,{children:"multi-qa-MiniLM-L6-cos-v1"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["zhipuai","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"embedding-2\nYou also can use other embedding models supported by the above embedding APIs."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>t});var l=i(7294);const s={},d=l.createContext(s);function t(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);