import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c,a as n,b as s,e as p,d as r}from"./app-55302f36.js";const o={},l=n("h2",{id:"字符与字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字符与字符串","aria-hidden":"true"},"#"),s(" 字符与字符串")],-1),d=n("ul",null,[n("li",null,[s("有单引号括起来的一个字符被称作"),n("code",null,"char"),s("型字面值，双引号括起来的零个或多个字符则构成字符串字面值。字符串字面值的类型实际上就是常量字符构成的字符数组，编译器在每一个字符串后面添加空字符（'\\0'）结尾，因此字符串的实际长度要比它的内容多1")])],-1),u=n("h2",{id:"string类字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#string类字符串","aria-hidden":"true"},"#"),s(),n("code",null,"string"),s("类字符串")],-1),g=n("li",null,[s("C++ 中提供了专门的头文件 string（注意不是 string.h，这个是 C 风格字符串相关函数的头文件），来支持 string 类型。string 类定义隐藏了字符串的数组性质，让我们可以像处理普通变量那样处理字符串。"),n("strong",null,"string 对象和字符数组之间的主要区别是：可以将 string 对象声明为简单变量，而不是数组"),s("。")],-1),h=n("code",null,"typedef basic_string string",-1),k={href:"https://so.csdn.net/so/search?q=%E6%B3%9B%E5%9E%8B%E7%B1%BB&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},v=r(`<h3 id="string的初始化" tabindex="-1"><a class="header-anchor" href="#string的初始化" aria-hidden="true">#</a> string的初始化</h3><h4 id="string-const-char-s-将string对象初始化为s指向的字符串" tabindex="-1"><a class="header-anchor" href="#string-const-char-s-将string对象初始化为s指向的字符串" aria-hidden="true">#</a> <code>string(const char *s) </code>将string对象初始化为s指向的字符串</h4><p><code>string str(&quot;hello!&quot;)</code></p><h4 id="string-size-type-n-char-c-创建一个包含n个元素的string对象-其中每个元素都被初始化为字符c" tabindex="-1"><a class="header-anchor" href="#string-size-type-n-char-c-创建一个包含n个元素的string对象-其中每个元素都被初始化为字符c" aria-hidden="true">#</a> <code>string(size_type n,char c) </code>创建一个包含n个元素的string对象，其中每个元素都被初始化为字符c</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string <span class="token function">str</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="string-const-string-str-将一个string对象初始化string对象str" tabindex="-1"><a class="header-anchor" href="#string-const-string-str-将一个string对象初始化string对象str" aria-hidden="true">#</a> <code>string(const string &amp;str)</code>将一个string对象初始化string对象str</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string <span class="token function">str1</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
string <span class="token function">str2</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string-创建一个默认的string对象" tabindex="-1"><a class="header-anchor" href="#string-创建一个默认的string对象" aria-hidden="true">#</a> <code>string()</code>创建一个默认的string对象</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string str<span class="token punctuation">;</span>
str <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

string str2 <span class="token operator">=</span> <span class="token string">&quot;hello2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取string对象的长度" tabindex="-1"><a class="header-anchor" href="#获取string对象的长度" aria-hidden="true">#</a> 获取string对象的长度</h3><ul><li>c++中可以使用<code>string.size()</code>函数或<code>string.length()</code>函数来获取string对象的长度</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>size_type   __CLR_OR_THIS_CALL   <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token keyword">const</span>   
<span class="token punctuation">{</span> <span class="token comment">//   return   length   of   sequence   </span>
  <span class="token keyword">return</span>   <span class="token punctuation">(</span>_Mysize<span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token punctuation">}</span>   
    
size_type   __CLR_OR_THIS_CALL   <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token keyword">const</span>   
<span class="token punctuation">{</span> <span class="token comment">//   return   length   of   sequence   </span>
  <span class="token keyword">return</span>   <span class="token punctuation">(</span>_Mysize<span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string <span class="token function">str</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">int</span> strlen1 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> strlen2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string对象的复制" tabindex="-1"><a class="header-anchor" href="#string对象的复制" aria-hidden="true">#</a> string对象的复制</h3><ul><li>c语言要对字符串进行拷贝复制，需要调用<code>strcpy、strncpy</code>函数，c++中可以将一个string对象赋值给另外一个string对象，实现拷贝复制</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string <span class="token function">str1</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

string str2<span class="token punctuation">;</span>

str2 <span class="token operator">=</span> str1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string对象的拼接" tabindex="-1"><a class="header-anchor" href="#string对象的拼接" aria-hidden="true">#</a> string对象的拼接</h3><h4 id="使用-拼接两个字符串" tabindex="-1"><a class="header-anchor" href="#使用-拼接两个字符串" aria-hidden="true">#</a> 使用<code>+</code>拼接两个字符串</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string str1 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
string st2 <span class="token operator">=</span> <span class="token string">&quot;world!&quot;</span><span class="token punctuation">;</span>

string str3 <span class="token operator">=</span> str1 <span class="token operator">+</span> str2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用string-push-back-函数" tabindex="-1"><a class="header-anchor" href="#使用string-push-back-函数" aria-hidden="true">#</a> 使用<code>string.push_back()</code>函数</h4><ul><li><code>push_back()</code>函数可以在一个<code>string</code>对象后面追加一个字符</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string <span class="token function">str</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用string-append-函数" tabindex="-1"><a class="header-anchor" href="#使用string-append-函数" aria-hidden="true">#</a> 使用<code>string.append()</code>函数</h4><ul><li>可以使用 string.append() 函数来在一个 string 对象后面附加一个 string 对象或 C 风格的字符串。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string str1 <span class="token operator">=</span> <span class="token string">&quot;hello,world!&quot;</span><span class="token punctuation">;</span>
string str2 <span class="token operator">=</span> <span class="token string">&quot;HELLO,WORLD!&quot;</span><span class="token punctuation">;</span>
    
str1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
str1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;C string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string对象的比较" tabindex="-1"><a class="header-anchor" href="#string对象的比较" aria-hidden="true">#</a> <code>string</code>对象的比较</h3><ul><li>在c++中，由于封装了string对象，所以简化了操作，可以直接使用关系运算符（==、!=、&lt;、&lt;=、&gt;、&gt;=）</li></ul>`,27);function m(b,_){const a=t("ExternalLinkIcon");return i(),c("div",null,[l,d,u,n("ul",null,[g,n("li",null,[h,s("也就是说C++中的string类是一个"),n("a",k,[s("泛型类"),p(a)]),s("，由模板而实例化的一个标准类，本质上不是一个标准数据类型。")])]),v])}const q=e(o,[["render",m],["__file","字符串.html.vue"]]);export{q as default};
