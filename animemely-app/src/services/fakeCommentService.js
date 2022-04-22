const comments = [
  {
    id: 1,
    movie_id: "5b21ca3eeb7f6fbccd471821",
    name: "tokuda",
    body: "phim hay vãi đái ",
  },
  {
    id: 2,
    movie_id: "5b21ca3eeb7f6fbccd471821",
    name: "tsukasa aoi ",
    body: "main này ok nè",
  },
  {
    id: 3,
    movie_id: "5b21ca3eeb7f6fbccd471819",
    name: "rina ishihara",
    body: "ok bình luận k biết nói gì .",
  },
  {
    id: 4,
    movie_id: "5b21ca3eeb7f6fbccd471816",
    name: "oyawa",
    body: "alo alo có ai mua vé số k ",
  },
  {
    id: 5,
    movie_id: "5b21ca3eeb7f6fbccd471819",
    name: "idol tok tok",
    body: "hello, bộ này cực đã mắt nha.",
  },
  {
    id: 6,
    movie_id: "5b21ca3eeb7f6fbccd471816",
    name: "banveso",
    body: "bán vé số khánh hòa đây alo alo .",
  },
  {
    id: 7,
    movie_id: "5b21ca3eeb7f6fbccd471819",
    name: "nikini",
    body: "abc không biết ghi gì hết .",
  },
];

export function getComments(){
    return comments ; 
}

export function getComment(id){
    const list = comments.filter(c => c.movie_id === id) ; 
    return list ;  
}