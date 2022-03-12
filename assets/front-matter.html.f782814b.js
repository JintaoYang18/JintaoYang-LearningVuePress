import{r as t,o as r,a as l,b as n,d as o,F as i,c as e,e as a}from"./app.dfdf48c2.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var c="/JintaoYang-LearningVuePress/assets/tags.217fedff.png",d="/JintaoYang-LearningVuePress/assets/content-tags.45f77e99.png",u="/JintaoYang-LearningVuePress/assets/date.8f4323d0.png",m="/JintaoYang-LearningVuePress/assets/content-date.8eb67d96.png",h="/JintaoYang-LearningVuePress/assets/author.8da65a6f.png",g="/JintaoYang-LearningVuePress/assets/content-author.eedba7fc.png",b="/JintaoYang-LearningVuePress/assets/location.bc48ac04.png",k="/JintaoYang-LearningVuePress/assets/content-location.8d81c914.png",f="/JintaoYang-LearningVuePress/assets/summary.01df09b0.png";const _={},y=e(`<h1 id="front-matter" tabindex="-1"><a class="header-anchor" href="#front-matter" aria-hidden="true">#</a> Front Matter</h1><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>Type: <code>string</code></li><li>Default: <code>undefined</code></li><li>Required: <code>true</code></li></ul><p>The title for the page and content.</p><p>e.g.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Hello World</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> tags</h2><ul><li>Type: <code>string|string[]</code></li><li>Default: <code>undefined</code></li><li>Required: <code>false</code></li></ul><p>The key to classifier pages and will also be displayed in the post:</p><img src="`+c+'" width="350px"><img src="'+d+`" width="350px"><p>e.g.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">tags</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> JavaScript
  <span class="token punctuation">-</span> DOM</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h2><ul><li>Type: <code>YYYY-MM-DD</code></li><li>Default: <code>undefined</code></li><li>Required: <code>false</code></li></ul>`,15),v=a("Our recommended format is "),w=n("code",null,"YYYY-MM-DD",-1),x=a(", but it actually accepts multi formats. VuePress is using "),Y=n("code",null,"js-yaml",-1),V=a(" which follows standard yaml types, so you can find all available formats "),L={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},T=a("here"),D=a("."),J=e('<p>Date for the post. This will be used for permalink, sorting and displayed in the layout:</p><img src="'+u+'" width="350px"><img src="'+m+`" width="350px"><p>e.g.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2016-10-20</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2><ul><li>Type: <code>string</code></li><li>Default: <code>undefined</code></li><li>Required: <code>false</code></li></ul><p>Author for the post. This will be displayed in the post:</p><img src="`+h+'" width="350px"><img src="'+g+`" width="350px"><p>e.g.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">author</span><span class="token punctuation">:</span> ULIVZ</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><ul><li>Type: <code>string</code></li><li>Default: <code>undefined</code></li><li>Required: <code>false</code></li></ul><p>Location for the post. This will be displayed in the post:</p><img src="`+b+'" width="350px"><img src="'+k+`" width="350px"><p>e.g.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">location</span><span class="token punctuation">:</span> Hangzhou</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h2><ul><li>Type: <code>string</code></li><li>Default: <code>undefined</code></li><li>Required: <code>false</code></li></ul><p>Summary for the post. This will be displayed in the post:</p><p><img src="`+f+`" alt="Summary"></p><p>e.g.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">summary</span><span class="token punctuation">:</span> Here&#39;s a quick post on what I found.</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,25);function P(q,M){const s=t("ExternalLinkIcon");return r(),l(i,null,[y,n("p",null,[v,w,x,Y,V,n("a",L,[T,o(s)]),D]),J],64)}var N=p(_,[["render",P]]);export{N as default};
