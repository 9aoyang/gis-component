export default {
  id: '75f0extui9d7yksklx27hff8xg',
  name: 'test',
  type: 'app',
  items: [
    {
      type: 'page',
      id: 'page_299',
      name: 'index',
      title: '',
      layout: 'absolute',
      style: {
        position: 'relative',
        left: 0,
        top: 0,
        right: '',
        bottom: '',
        width: '375',
        height: '1728',
        backgroundImage: '',
        backgroundColor: 'rgba(248, 218, 218, 1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        color: '',
        fontSize: '',
        fontWeight: '',
        transform: {
          rotate: '',
          scale: ''
        }
      },
      created: '',
      items: [
        {
          id: 'gis_8013e0a6',
          type: 'gis',
          style: {
            position: 'absolute',
            backgroundColor: '#fff',
            width: '250px',
            height: '250px',
            top: 138,
            left: 60,
            right: '',
            bottom: '',
            backgroundImage: '',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: '',
            fontSize: '',
            fontWeight: '',
            transform: {
              rotate: '',
              scale: ''
            }
          },
          name: 'GIS',
          longitude: 30,
          latitude: 120,
          center: [30, 120],
          items: []
        },
        {
          id: 'button_9478a991',
          type: 'button',
          style: {
            border: '1px solid blue',
            padding: '4px 8px',
            position: 'absolute',
            top: 408.5,
            left: '',
            right: '',
            bottom: '',
            width: '',
            height: '',
            backgroundImage: '',
            backgroundColor: '',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: '',
            fontSize: '',
            fontWeight: '',
            transform: {
              rotate: '',
              scale: ''
            }
          },
          name: '自定义按钮',
          items: [],
          events: [
            {
              name: 'button:click',
              to: 'button_9478a991',
              method: 'log'
            }
          ],
          created: ''
        }
      ]
    }
  ]
};
