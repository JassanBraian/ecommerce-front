export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Creo haberlo visto anoche cerca del shopping viejo en Yerba Buena",
        username: "Jose Garcia",
        userId: "1",
        parentId: null,
        createdAt: "2022-05-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Pobre, ahora sigo la publicacion por si es que lo veo aviso",
        username: "Maria Lopez",
        userId: "2",
        parentId: null,
        createdAt: "2022-05-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Muchas gracias! Ahora iremos a buscar en la zona",
        username: "Nicolas Carrasco",
        userId: "2",
        parentId: "1",
        createdAt: "2022-05-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Gracias!",
        username: "Nicolas Carrasco",
        userId: "2",
        parentId: "2",
        createdAt: "2022-05-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "10",
      username: "Jonathan Arriazu",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };