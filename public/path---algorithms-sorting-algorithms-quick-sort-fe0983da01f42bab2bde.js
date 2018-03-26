webpackJsonp([507710492276933e4],{"./node_modules/json-loader/index.js!./.cache/json/algorithms-sorting-algorithms-quick-sort.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Quick Sort</h2>\n<p>Quick sort is an efficient divide and conquer sorting algorithm. Average case time complexity of Quick Sort is O(nlog(n)) with worst case time complexity being O(n^2).</p>\n<p>The steps involved in Quick Sort are:</p>\n<ul>\n<li>Choose an element to serve as a pivot, in this case, the last element of the array is the pivot.</li>\n<li>Partitioning: Sort the array in such a manner that all elements less than the pivot are to the left, and all elements greater than the pivot are to the right.</li>\n<li>Call Quicksort recursively, taking into account the previous pivot to properly subdivide the left and right arrays. (A more detailed explanation can be found in the comments below)</li>\n</ul>\n<p>A quick implementation in JavaScript:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\n\n<span class="token keyword">const</span> quickSort <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">if</span><span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token comment" spellcheck="true">// You can learn about how the pivot value is derived in the comments below</span>\n    <span class="token keyword">let</span> pivot <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>\n\n    <span class="token comment" spellcheck="true">// Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used</span>\n    <span class="token comment" spellcheck="true">// These are the recursive calls to quickSort</span>\n    <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> pivot <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> pivot <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> \n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> partition <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> \n  <span class="token keyword">let</span> pivot <span class="token operator">=</span> end\n  <span class="token comment" spellcheck="true">// Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot]</span>\n  <span class="token comment" spellcheck="true">// Succeeding comments will expound upon the above comment</span>\n  <span class="token keyword">let</span> i <span class="token operator">=</span> start <span class="token operator">-</span> <span class="token number">1</span>\n  <span class="token keyword">let</span> j <span class="token operator">=</span> start\n\n  <span class="token comment" spellcheck="true">// Increment j up to the index preceding the pivot</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token comment" spellcheck="true">// If the value is greater than the pivot increment j</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>pivot<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      j<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// When the value at arr[j] is less than the pivot:</span>\n    <span class="token comment" spellcheck="true">// increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j]</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      i<span class="token operator">++</span>\n      <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> j<span class="token punctuation">,</span> i<span class="token punctuation">)</span>\n      j<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n\n  <span class="token punctuation">}</span>\n\n  <span class="token comment" spellcheck="true">//The value at arr[i + 1] will be greater than the value of arr[pivot]</span>\n  <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> pivot<span class="token punctuation">)</span>\n\n  <span class="token comment" spellcheck="true">//You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1]</span>\n  <span class="token comment" spellcheck="true">// As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value</span>\n  <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> swap <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token punctuation">,</span> firstIndex<span class="token punctuation">,</span> secondIndex<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>firstIndex<span class="token punctuation">]</span>\n  arr<span class="token punctuation">[</span>firstIndex<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>secondIndex<span class="token punctuation">]</span>\n  arr<span class="token punctuation">[</span>secondIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp\n<span class="token punctuation">}</span>\n\n<span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The space complexity of quick sort is O(n). This is an improvement over other divide and conquer sorting algorithms, which take O(nlong(n)) space. Quick sort achieves this by changing the order of elements within the given array. Compare this with the <a href=\'https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort\' target=\'_blank\' rel=\'nofollow\'>merge sort</a> algorithm which creates 2 arrays, each length n/2, in each function call.</p>\n<h4>More Information:</h4>\n<ul>\n<li>\n<p><a href=\'https://en.wikipedia.org/wiki/Quicksort\' target=\'_blank\' rel=\'nofollow\'>Wikipedia</a></p>\n</li>\n<li>\n<p><a href=\'http://www.geeksforgeeks.org/quick-sort\' target=\'_blank\' rel=\'nofollow\'>GeeksForGeeks</a></p>\n</li>\n<li>\n<p><a href=\'https://www.youtube.com/watch?v=MZaf_9IZCrc\' target=\'_blank\' rel=\'nofollow\'>Youtube: A Visual Explanation of Quicksort</a></p>\n</li>\n</ul>',fields:{slug:"/algorithms/sorting-algorithms/quick-sort/"},frontmatter:{title:"Quick Sort"}}},pathContext:{slug:"/algorithms/sorting-algorithms/quick-sort/"}}}});
//# sourceMappingURL=path---algorithms-sorting-algorithms-quick-sort-fe0983da01f42bab2bde.js.map