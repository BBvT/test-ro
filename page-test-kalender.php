<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
<p>&lt;?php<br>
  get_header();<br>
  global $post;<br>
  $widget = get_post_meta($post-&gt;ID, '_widget_radio', true);<br>
  if ($post-&gt;post_parent) {$ancestors=get_post_ancestors($post-&gt;ID); $root=count($ancestors)-1; $parent = $ancestors[$root]; } else { $parent = $post-&gt;ID;}<br>
  $children = wp_list_pages('sort_column=menu_order&amp;title_li=&amp;child_of='.$parent.'&amp;echo=0&amp;depth=2');</p>
<p>?&gt;</p>
<p>&lt;!-- ter info: this is page-test-kalender.php --&gt;<br>
</p>
<p> &lt;div id=&quot;blueBar&quot;&gt;<br>
  &lt;div class=&quot;clear&quot;&gt;<br>
  &lt;/div&gt;<br>
  &lt;div class=&quot;container_24 magentopage&quot;&gt;<br>
  &lt;div class=&quot;grid_5&quot;&gt;<br>
  &lt;div class=&quot;moduletable-subMenu&quot;&gt;<br>
  &lt;?php<br>
  if(get_field('zijbalk_menu')) {<br>
  $zijbalk_menu = get_field('zijbalk_menu');<br>
  ?&gt;<br>
  &lt;h3&gt;&lt;?php echo $zijbalk_menu; ?&gt;&lt;/h3&gt;<br>
  &lt;?php<br>
  wp_nav_menu(array(<br>
  'menu' =&gt; $zijbalk_menu,<br>
  'theme_location' =&gt; 'primary',<br>
  'depth' =&gt; 1,<br>
  'menu_class' =&gt; 'nav menu',<br>
  'menu_id' =&gt; 'subMenu',<br>
  'fallback_cb' =&gt; 'wp_bootstrap_navwalker::fallback',<br>
  'walker' =&gt; new wp_bootstrap_navwalker())<br>
  );<br>
  }<br>
  ?&gt;<br>
  &lt;/div&gt;<br>
  &amp;nbsp;<br>
  &lt;/div&gt;</p>
<p> &lt;div class=&quot;grid_19&quot;&gt;<br>
  &lt;div class=&quot;breadcrumbs&quot;&gt;<br>
  &lt;/div&gt;<br>
  &lt;div id=&quot;system-message-container&quot;&gt;<br>
  &lt;/div&gt;<br>
  &lt;?php if(!is_front_page()) { if ( function_exists('yoast_breadcrumb') ) { yoast_breadcrumb('&lt;p id=&quot;breadcrumbs&quot;&gt;','&lt;/p&gt;');} } ?&gt;<br>
  &lt;?php if(have_posts()) : while(have_posts()) : the_post(); ?&gt;<br>
  &lt;?php the_content(); ?&gt;<br>
  &lt;?php endwhile; endif; wp_reset_query(); ?&gt;<br>
  &lt;/div&gt;<br>
  &lt;/div&gt;<br>
  &lt;/div&gt;<br>
  &lt;/div&gt;<br>
  &lt;div class=&quot;push&quot;&gt;<br>
  &lt;/div&gt;<br>
  &lt;/div&gt;<br>
  &lt;/div&gt;<br>
  &lt;/div&gt;</p>
<p> &lt;?php get_footer(); ?&gt;</p>
</body>
</html>