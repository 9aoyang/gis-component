export default {
  id: "75f0extui9d7yksklx27hff8xg",
  name: "test",
  type: "app",
  items: [
    {
      type: "page",
      id: "page_299",
      name: "index",
      title: "",
      layout: "absolute",
      style: {
        position: "relative",
        left: 0,
        top: 0,
        right: "",
        bottom: "",
        width: "375",
        height: "1728",
        backgroundImage: "",
        backgroundColor: "rgba(248, 218, 218, 1)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        color: "",
        fontSize: "",
        fontWeight: "",
        transform: {
          rotate: "",
          scale: ""
        }
      },
      events: [
        {
          name: "magic:common:events:click",
          to: "gis_8013e0a6",
          method: "log"
        }
      ],
      created: "",
      items: [
        {
          id: "gis_8013e0a6",
          type: "gis",
          style: {
            position: "absolute",
            backgroundColor: "#fff",
            width: "250px",
            height: "250px",
            top: 138,
            left: 60,
            right: "",
            bottom: "",
            backgroundImage: "",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            color: "",
            fontSize: "",
            fontWeight: "",
            transform: {
              rotate: "",
              scale: ""
            }
          },
          name: "GIS",
          longitude: 30,
          latitude: 120,
          center: [
            30,
            120
          ],
          items: [],
          events: [
            {
              name: "map:click",
              to: "page_299",
              method: "refresh"
            }
          ],
          created: ""
        }
      ]
    }
  ]
};
