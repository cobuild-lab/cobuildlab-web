export const MENUITEMS = [
  {
    title: 'Home',
    type: 'sub',
    children: [
      { path: '/layouts/agency', title: 'Agency', type: 'link' },
      { path: '/layouts/app1', title: 'App Landing1', type: 'link' },
      { path: '/layouts/app2', title: 'App Landing2', type: 'link' },
      { path: '/layouts/event', title: 'Event', type: 'link' },
      { path: '/layouts/gym', title: 'Gym', type: 'link' },
      { path: '/layouts/music', title: 'Music', type: 'link' },
      { path: '/layouts/resume', title: 'Resume', type: 'link' },
      { path: '/layouts/modern-sass', title: 'Sass1', type: 'link' },
      { path: '/layouts/enterprice-sass', title: 'Sass2', type: 'link' },
      { path: '/layouts/wedding', title: 'Wedding', type: 'link' },
      { path: '/layouts/yoga', title: 'Yoga', type: 'link' },
      { path: '/layouts/portfolioLayouts', title: 'Portfolio', type: 'link' },
    ],
  },
  {
    title: 'Blog',
    type: 'sub',
    children: [
      {
        title: 'Blog Grid View',
        type: 'sub',
        children: [
          { path: '/blog/blog-grid/column-no-sidebar', title: 'No Sidebar', type: 'link' },
          { path: '/blog/blog-grid/column-left-sidebar', title: 'Left Sidebar', type: 'link' },
          { path: '/blog/blog-grid/column-right-sidebar', title: 'Right Sidebar', type: 'link' },
          {
            path: '/blog/blog-grid/classic-no-sidebar',
            title: 'Full Width No Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-grid/classic-right-sidebar',
            title: 'Full Width Right Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-grid/classic-left-sidebar',
            title: 'Full Width Left Sidebar',
            type: 'link',
          },
        ],
      },
      {
        title: 'Blog List',
        type: 'sub',
        children: [
          { path: '/blog/blog-list/list-no-sidebar', title: 'List No Sidebar', type: 'link' },
          { path: '/blog/blog-list/list-left-sidebar', title: 'List Left Sidebar', type: 'link' },
          { path: '/blog/blog-list/list-right-sidebar', title: 'List Right Sidebar', type: 'link' },
        ],
      },
      {
        title: 'Blog List Creative',
        type: 'sub',
        children: [
          { path: '/blog/blog-list-creative/split-no-sidebar', title: 'No Sidebar', type: 'link' },
          {
            path: '/blog/blog-list-creative/split-left-sidebar',
            title: 'Left Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-list-creative/split-right-sidebar',
            title: 'Right Sidebar',
            type: 'link',
          },
        ],
      },
      {
        title: 'Blog Mix Layout',
        type: 'sub',
        children: [
          {
            path: '/blog/blog-mix-layout/bigpost-list',
            title: 'List Mix With Left Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-mix-layout/bigpost-split',
            title: 'List Mix With Right Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-mix-layout/bigpost-split-no-sidebar',
            title: 'List Mix With No Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-mix-layout/bigpost-list-no-sidebar',
            title: 'List Full Width No Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-mix-layout/bigpost-column',
            title: 'Grid Mix With Right Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-mix-layout/bigpost-column-no-sidebar',
            title: 'Grid Mix With No Sidebar',
            type: 'link',
          },
        ],
      },
      {
        title: 'Blog Details',
        type: 'sub',
        children: [
          { path: '/blog/blog-detail/detail-left-sidebar', title: 'Left Sidebar', type: 'link' },
          { path: '/blog/blog-detail/detail', title: 'Right Sidebar', type: 'link' },
          { path: '/blog/blog-detail/detail-no-sidebar', title: 'No Sidebar', type: 'link' },
          {
            path: '/blog/blog-detail/detail-gallery',
            title: 'Detail Page With Gallery',
            type: 'link',
          },
          { path: '/blog/blog-detail/detail-video', title: 'Detail Page With Video', type: 'link' },
        ],
      },
      {
        title: 'Blog Masonary',
        type: 'sub',
        children: [
          { path: '/blog/blog-masonary/fullwidth-2', title: 'Full Width 2', type: 'link' },
          { path: '/blog/blog-masonary/fullwidth-3', title: 'Full Width 3', type: 'link' },
          { path: '/blog/blog-masonary/fullwidth-4', title: 'Full Width 4', type: 'link' },
          { path: '/blog/blog-masonary/masonary-no-sidebar', title: 'No Sidebar', type: 'link' },
          {
            path: '/blog/blog-masonary/masonary-right-sidebar',
            title: 'Right Sidebar',
            type: 'link',
          },
          {
            path: '/blog/blog-masonary/masonary-left-sidebar',
            title: 'Left Sidebar',
            type: 'link',
          },
        ],
      },
    ],
  },
  {
    title: 'Pages',
    type: 'sub',
    children: [
      { path: '/page/404', title: '404', type: 'link' },
      { path: '/page/faq', title: 'FAQ', type: 'link' },
      { path: '/page/typography', title: 'Typography', type: 'link' },
      { path: '/page/maintenance', title: 'Maintenance', type: 'link' },
      { path: '/page/about-us', title: 'About us', type: 'link' },

      {
        title: 'Team',
        type: 'sub',
        children: [
          { path: '/page/team', title: 'Team', type: 'link' },
          { path: '/page/team-grid', title: 'Team Grid', type: 'link' },
          { path: '/page/team-list', title: 'Team List', type: 'link' },
        ],
      },
      {
        title: 'Comming Soon',
        type: 'sub',
        children: [
          { path: '/page/commingsoon1', title: 'Comming Soon1', type: 'link' },
          { path: '/page/commingsoon2', title: 'Comming Soon2', type: 'link' },
        ],
      },
    ],
  },
  {
    title: 'Elements',
    megaMenu: true,
    megaMenuType: 'small',
    type: 'sub',
    children: [
      {
        title: 'Elements1',
        type: 'sub',
        children: [
          { path: '/elements/alerts', title: 'Alerts', type: 'link', icon: 'alert' },
          {
            path: '/elements/accordion',
            title: 'Accordion',
            type: 'link',
            icon: 'layout-accordion-merged',
          },
          { path: '/elements/boxshadow', title: 'Box Shadow', type: 'link', icon: 'layers' },
          { path: '/elements/button', title: 'Buttons', type: 'link', icon: 'write' },
          { path: '/elements/contact', title: 'Contact', type: 'link', icon: 'map-alt' },
        ],
      },
      {
        title: 'Elements2',
        type: 'sub',
        children: [
          { path: '/elements/event-schedule', title: 'Event-Schedule', type: 'link', icon: 'list' },
          { path: '/elements/gallery', title: 'Gallery', type: 'link', icon: 'gallery' },
          { path: '/elements/pricing', title: 'Pricing', type: 'link', icon: 'money' },
          { path: '/elements/counter', title: 'Counter', type: 'link', icon: 'time' },
          { path: '/elements/count-down', title: 'Countdown', type: 'link', icon: 'alarm-clock' },
        ],
      },
      {
        title: 'Elements3',
        type: 'sub',
        children: [
          { path: '/elements/progressbar', title: 'Progress Bar', type: 'link', icon: 'bar-chart' },
          { path: '/elements/testimonial', title: 'Testimonial', type: 'link', icon: 'thought' },
          { path: '/elements/video', title: 'Video', type: 'link', icon: 'video-camera' },
          { path: '/elements/service', title: 'Service', type: 'link', icon: 'headphone' },
          { path: '/elements/subscribe', title: 'Subscribe', type: 'link', icon: 'share-alt' },
        ],
      },
    ],
  },
  {
    title: 'Portfolio',
    megaMenu: true,
    megaMenuType: 'medium',
    type: 'sub',
    children: [
      {
        title: 'Portfolio-Basic',
        type: 'link',
        children: [
          { path: '/portfolio/basic-2-grid', title: 'Basic – 2 Grid', type: 'link' },
          { path: '/portfolio/basic-3-grid', title: 'Basic – 3 Grid', type: 'link' },
          { path: '/portfolio/basic-4-grid', title: 'Basic – 4 Grid', type: 'link' },
          {
            path: '/portfolio/portfolio-title-2-col',
            title: 'Basic W Tittle – 2 Grid',
            type: 'link',
          },
          {
            path: '/portfolio/portfolio-title-3-col',
            title: 'Basic W Tittle – 3 Grid',
            type: 'link',
          },
          {
            path: '/portfolio/portfolio-title-4-col',
            title: 'Basic W Tittle – 4 Grid',
            type: 'link',
          },
          { path: '/portfolio/portfolio-parallex', title: 'Parallex', type: 'link' },
          { path: '/portfolio/centered-slide', title: 'Centered Slides', type: 'link' },
          { path: '/portfolio/vertical-slide', title: 'Vertical Slides', type: 'link' },
          {
            path: '/portfolio/multiple-carousel',
            title: '4 Slide With Center Slider',
            type: 'link',
          },
        ],
      },
      {
        title: 'Portfolio-Details',
        type: 'link',
        children: [
          { path: '/portfolio/portfolio-detail-1', title: 'Container Layout', type: 'link' },
          { path: '/portfolio/portfolio-detail-2', title: 'Full Width', type: 'link' },
          { path: '/portfolio/portfolio-detail-3', title: 'With Bg Bredcrumb', type: 'link' },
          { path: '/portfolio/portfolio-detail-4', title: 'Details With Slider', type: 'link' },
          { path: '/portfolio/portfolio-detail-5', title: 'Video Portfolio', type: 'link' },
          { path: '/portfolio/portfolio-detail-6', title: 'Two Image Portfolio', type: 'link' },
          {
            path: '/portfolio/portfolio-detail-7',
            title: 'Left Side Image Portfolio',
            type: 'link',
          },
        ],
      },
      {
        title: 'Trending Layout',
        type: 'link',
        children: [
          { path: '/portfolio/creative-1', title: 'Trending Layout 1', type: 'link' },
          { path: '/portfolio/creative-2', title: 'Trending Layout 2', type: 'link' },
          { path: '/portfolio/creative-3', title: 'Trending Layout 3', type: 'link' },
          { path: '/portfolio/creative-4', title: 'Trending Layout 4', type: 'link' },
          { path: '/portfolio/modern-4', title: 'Trending Layout 5', type: 'link' },
          { path: '/portfolio/modern-3', title: 'Trending Layout 6', type: 'link' },
          { path: '/portfolio/modern-2', title: 'Trending Layout 7', type: 'link' },
        ],
      },
      {
        title: 'Portfolio-Masonary',
        type: 'link',
        children: [
          { path: '/portfolio/full-width-2-grid', title: 'Full-Width – 2 Grid', type: 'link' },
          { path: '/portfolio/full-width-3-grid', title: 'Full-Width – 3 Grid', type: 'link' },
          { path: '/portfolio/full-width-4-grid', title: 'Full-Width – 4 Grid', type: 'link' },
        ],
      },
    ],
  },
  {
    title: 'Features',
    megaMenu: true,
    megaMenuType: 'medium',
    type: 'sub',
    children: [
      {
        title: 'Header Style',
        type: 'link',
        children: [
          { path: '/features/header-light', title: 'Light Header', type: 'link' },
          { path: '/features/header-dark', title: 'Dark Header', type: 'link' },
          { path: '/features/header-transparent', title: 'Glass Header', type: 'link' },
          {
            path: '/features/header-right-navigation',
            title: 'Header Right Navigation',
            type: 'link',
          },
          { path: '/features/header-center-logo', title: 'Header Center Logo', type: 'link' },
        ],
      },
      {
        title: 'Breadcrumb Style',
        type: 'link',
        children: [
          { path: '/features/breadcrumb-big-typography', title: 'Classic Type', type: 'link' },
          { path: '/features/breadcrumb-left', title: 'Breadcrumb Left', type: 'link' },
          { path: '/features/breadcrumb-right', title: 'Breadcrumb Right', type: 'link' },
          { path: '/features/breadcrumb-center', title: 'Breadcrumb Center', type: 'link' },
          { path: '/features/breadcrumb-dark', title: 'Breadcrumb Dark', type: 'link' },
          {
            path: '/features/breadcrumb-parallex-bg',
            title: 'Breadcrumb Parallex-Bg',
            type: 'link',
          },
          { path: '/features/breadcrumb-bg', title: 'Breadcrumb Bg', type: 'link' },
          { path: '/features/breadcrumb-gallery', title: 'Breadcrumb Gallery', type: 'link' },
          { path: '/features/breadcrumb-video', title: 'Breadcrumb Video', type: 'link' },
        ],
      },
      {
        title: 'Footer Style',
        type: 'link',
        children: [
          { path: '/features/footer-default', title: 'Footer-Default', type: 'link' },
          { path: '/features/footer-light', title: 'Footer-Light', type: 'link' },
          { path: '/features/footer-dark', title: 'Footer-Dark', type: 'link' },
          { path: '/features/footer-light2', title: 'Footer Dark Light', type: 'link' },
          { path: '/features/footer-dark2', title: 'Footer Dark Gradient', type: 'link' },
          { path: '/features/footer-dark3', title: 'Footer Creative', type: 'link' },
        ],
      },
      {
        title: 'Gallery',
        type: 'link',
        children: [
          { path: '/features/zoom-gallery', title: 'Zoom Gallery', type: 'link' },
          { path: '/features/form-popup', title: 'Form Popup', type: 'link' },
          { path: '/features/modal-popup', title: 'Modal Popup', type: 'link' },
          { path: '/features/youtube-popup', title: 'Youtube Popup', type: 'link' },
          { path: '/features/map-popup', title: 'Map Popup', type: 'link' },
        ],
      },
    ],
  },
];
