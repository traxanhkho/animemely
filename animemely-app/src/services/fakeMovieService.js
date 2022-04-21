import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    movie_name: "Shigatsu wa Kimi no Uso",
    content:
      "Câu chuyện kể về Arima Kousei, một thần đồng piano. Nhưng kể từ sau chấn động tâm lí do cái sự qua đời của mẹ cậu, Kosei đã không thể nghe thấy bất kì âm thanh nào. Cứ tưởng là cậu sẽ không bao giờ động vào những phím piano nữa nhưng đó là trước khi cậu đã gặp Miyazono Kaori",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    genre_name: "Tình cảm",
    starRatingMovie: 3,
    posters: "https://animehay.club/upload/poster/75.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2021",
    list_episode: [
      {
        _id: "1a1",
        path: "https://scontent.xx.fbcdn.net/v/t42.27313-2/10000000_134397259090217_7619294906167145046_n.mp4?_nc_cat=104&vs=9dfbd39578a6a13f&_nc_vs=HBksFQAYJEdJQ1dtQUFwQ2VQTU8zb0FBRll5Q1RGWkxMMXBickZxQUFBRhUAAsgBABUAGCRHQmxrWVJBWnF1aVNKT2NLQUp6WTh6VUxnOXhFYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmosDpy9jrbRUCKAJDMxgLdnRzX3ByZXZpZXccF0B3WU%2FfO2RaGClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA80ODU0NTk2MDk4MjM3NjESb2VtX3ZpZGVvX2Fzc2V0X2lkDzM3MTc4NTMzNDc5MDA2NxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjQxNTQzNjcxNTI1MzkzHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPMzM0OTU5NDk1MjM4NTM4JQIcACXEARsHiAFzBDE1MDQCY2QKMjAyMi0wMi0yOANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MHMzczLjcxNQJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=qzVNqFR8ZZ8AX_XednQ&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT9hqzuQeVrdsGRBG7GBWfEu5Tjf0VGBq_2GGCt7PAB_Hg&oe=625E032C&_nc_rid=404396386731638",
      },
      {
        _id: "1a2",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_314590070704888_4116557833009711065_n.mp4?_nc_cat=104&vs=11594d783ddc5d74&_nc_vs=HBksFQAYJEdJQ1dtQUQ0Q21vMUhoNEJBTmxINWVXSjh5QTVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFDZEtmUXhoSzhDQUpuZEs0aFJqVFVGYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmzqqrgu35bxUCKAJDMxgLdnRzX3ByZXZpZXccF0CVfH752yLRGDRkYXNoX2k0bGl0ZWJhc2ljX3Bhc3N0aHJvdWdoYWxpZ25lZF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwmIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkEDEwNTE5ODU2NzUzNTI3MTYSb2VtX3ZpZGVvX2Fzc2V0X2lkDzM3NDQ2ODA3NDEyMDg5MRVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjQ2MTg0OTc3NzIyMDIzHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNjU4MjY3NDU4Nzc1MTExJQIcACXEARsHiAFzBDM4ODMCY2QKMjAyMi0wMi0yMgNyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MLMTM3NS4xMzE2NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=XXtF3pJjTXoAX9Od3Pj&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_tu9dOV7sDC18MYmxKry4kJ_J5UnYyqDzoQPG5CkRkNg&oe=625E59B4&_nc_rid=062136047446454",
      },
      {
        _id: "1a3",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_129682919590647_4162103689769722006_n.mp4?_nc_cat=102&vs=c32174d890c3c8db&_nc_vs=HBksFQAYJEdJQ1dtQUQzQ2xzbzhuVUFBSllnRVF0Qnc4STVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEM2lDVlg5S2dIQUJaTzVIVGZpbDFaYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm5sDA4K2NcxUCKANDM2UYC3Z0c19wcmV2aWV3HBdAlXx%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8yNzc3MDQwMjExNDcwODcSb2VtX3ZpZGVvX2Fzc2V0X2lkEDE0MDYzODAyNjk3OTM4MTIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzI1MzExNzE1MzY3NzM2MxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzI5OTAxMDg1MjIyMjAyOCUCHAAlxAEbB4gBcwQyMjMxAmNkCjIwMjItMDItMjIDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEzNzUuMTMxNjY3AnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=0-9sZB6f79oAX89P6sj&_nc_ht=video-lga3-2.xx&edm=APRAPSkEAAAA&oh=00_AT_Z0BdT2AYAor0W8CAi3UHxT9L-OW25s5UgwQdliIAJNA&oe=625E311C&_nc_rid=466861743439238",
      },
      {
        _id: "1a4",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_1111080303025887_8951257575088292101_n.mp4?_nc_cat=100&vs=4977db2240c695ae&_nc_vs=HBksFQAYJEdJQ1dtQURmWHNlS2hmSURBQVdCS2JoV1FUbDhickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEYTJGT0FkU3dCQUFJRnJtaVAxVlVIYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmzpGL4dvewwMVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXz%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxMzE2NzkxNTk4ODI1MTk5Em9lbV92aWRlb19hc3NldF9pZA82ODM2OTg3OTI5ODQwNDIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzk5MzM4NjcxMTU3MzYwNxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzI3MDg5OTA0NTIyNTY3OSUCHAAlxAEbB4gBcwQyMTgxAmNkCjIwMjItMDMtMDgDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEzNzUuMjQ4MzMzAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=6gsJGlK9wmEAX_sPAex&_nc_ht=video-lax3-2.xx&edm=APRAPSkEAAAA&oh=00_AT9mfKlNAcBFozqdVFxQk8zv-WMfRuqeTbO4RmGJouy5tg&oe=625E6D6E&_nc_rid=735945520436931",
      },
      {
        _id: "1a5",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_103719962257875_1455091531145287347_n.mp4?_nc_cat=102&vs=9ab66b573e79313b&_nc_vs=HBksFQAYJEdJQ1dtQURUcVlFdlZWNEFBTE1XbU1VSmhqRVVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFCdGM3N1hseThDQVA2bllYWWIwOUZvYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmupie0rKEuwIVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXx%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8zMjQyMzQ1NTI4NDI4NDkSb2VtX3ZpZGVvX2Fzc2V0X2lkDzMzMDAyMjkxNTcyMjkyMhVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPNjkyNzY3ODQyMDkyNTczHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNDcxNDI2MDgxMTIyNDk3JQIcACXEARsHiAFzBDM3MjMCY2QKMjAyMi0wMi0yNANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MLMTM3NS4xMzE2NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=S0D6zTg_700AX8YMw7F&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_r56g_cQhRTQytqCaXCZ02HCajNniMmebLMo5BiuEkTw&oe=625EAC4D&_nc_rid=917161800361883",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    movie_name: "Ganbare Douki-chan",
    content:
      "Ở chung phòng với cô bạn đồng nghiệp trong khách sạn ư?! Tuy cô ấy đã cảnh cáo mình không được làm điều gì ngu ngốc, nhưng đôi mắt mình vẫn bất giác hướng xuống chiếc quần tất đang bó sát lấy đôi chân ấy...” Dù rằng vẫn luôn cố gắng kiềm nén cảm xúc, chàng trai lại không hề hay biết Douki-chan đang thầm thích mình. Trong lúc Douki-chan đang vật lộn để thổ lộ tình cảm, các đối thủ của cô ấy, cả kouhai và senpai, cũng đang tìm mọi cách để giành lấy sự chú ý từ chàng trai. Douki-chan sẽ thành công không?",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    genre_name: "Tình cảm",
    starRatingMovie: 2.5,
    posters: "https://animehay.club//upload/poster/3323.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2018",
    list_episode: [
      {
        _id: "1b1",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_134397259090217_7619294906167145046_n.mp4?_nc_cat=104&vs=9dfbd39578a6a13f&_nc_vs=HBksFQAYJEdJQ1dtQUFwQ2VQTU8zb0FBRll5Q1RGWkxMMXBickZxQUFBRhUAAsgBABUAGCRHQmxrWVJBWnF1aVNKT2NLQUp6WTh6VUxnOXhFYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmosDpy9jrbRUCKAJDMxgLdnRzX3ByZXZpZXccF0B3WU%2FfO2RaGClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA80ODU0NTk2MDk4MjM3NjESb2VtX3ZpZGVvX2Fzc2V0X2lkDzM3MTc4NTMzNDc5MDA2NxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjQxNTQzNjcxNTI1MzkzHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPMzM0OTU5NDk1MjM4NTM4JQIcACXEARsHiAFzBDE1MDQCY2QKMjAyMi0wMi0yOANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MHMzczLjcxNQJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=qzVNqFR8ZZ8AX_XednQ&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT9hqzuQeVrdsGRBG7GBWfEu5Tjf0VGBq_2GGCt7PAB_Hg&oe=625E032C&_nc_rid=404396386731638",
      },
      {
        _id: "1b2",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_1010460339585466_8474404633859160479_n.mp4?_nc_cat=104&vs=690ef603e53334b0&_nc_vs=HBksFQAYJEdJQ1dtQUM2d1praEFwY0RBSjk1R1h3ZElwdDFickZxQUFBRhUAAsgBABUAGCRHTXk0WFJCTjg0ZU5hVXdDQUt2NjRIM3J6NVVnYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmopO1t4H2qAMVAigCQzMYC3Z0c19wcmV2aWV3HBdAc2ml41P3zxgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNDgxMTg0OTEzNTU1NTY4Em9lbV92aWRlb19hc3NldF9pZA82MzU3MDgzODA4NDU4NjkVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzkzNDQxMzI3NzI0MjU3NxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzMyMzEyMzQ3OTc3NTM0OCUCHAAlxAEbB4gBcwQyNzYzAmNkCjIwMjItMDItMjUDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zBzMxMC43MjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=Y3PK-nDIgqMAX_C_1FB&_nc_ht=video-msp1-1.xx&edm=APRAPSkEAAAA&oh=00_AT9NXdJKT0VqcJ79Yd1lqmb_olkk2iDfY26XZyTihxbRdA&oe=625E6EFF&_nc_rid=062286664453733",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    movie_name: "Get OutAharen-san wa Hakarenai",
    content:
      "Phim về hai nhân vật Raidou và Aharen-san. Aharen là người có vấn đề cảm xúc, không xác định được làm thế nào để kết thân với người khác.",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hài hước" },
    genre_name: "Hài hước",
    starRatingMovie: 3.5,
    posters: "https://animehay.club//upload/poster/3463.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2022",
    list_episode: [
      {
        _id: "1c1",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.25447-2/10000000_121248520324117_6824138986487426852_n.mp4?_nc_cat=110&vs=4f7b0b38916c956d&_nc_vs=HBksFQAYJEdJQ1dtQUFWeFB0ZVJtNEFBQ1F2ZXB0QU5yUmVibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFBV0xtekdrUWNDQVAwZENBSGkwRUJ4YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmuJSSrbjPnAEVAigCQzMYC3Z0c19wcmV2aWV3HBdAlnRpeNT99BgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNDcyMDk1NzAxMjgwODIzEm9lbV92aWRlb19hc3NldF9pZA85NDA2MTgzNjk5MzM5NzgVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzM0NDQxMjQwMTA1OTEwMBxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzU0MzkwOTM1NzAyNTg0OSUCHAAlxAEbB4gBcwM3ODUCY2QKMjAyMi0wNC0wMQNyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MIMTQzNy4wODMCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=UNsVfb4twGsAX8nny-d&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_zQdGbpbqo1Dh24VBRtK_P51Ja-OqH2oVm4vU9XjPEQg&oe=626195C4&_nc_rid=452205040873314",
      },
      {
        _id: "1c2",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t39.25447-2/10000000_359483569452132_4789889537346791541_n.mp4?_nc_cat=102&vs=4eea624a019195ce&_nc_vs=HBksFQAYJEdJQ1dtQUJrdEhYSzhrWUJBSFZvNmdJb0czbENibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFEeWxwdGlnVk1EQUdUMWhvd1hDZFVzYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmjs7O77zNhREVAigCQzMYC3Z0c19wcmV2aWV3HBdAlnQCDEm6XhgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPMjY3NzExNDE4NzkxODg2Em9lbV92aWRlb19hc3NldF9pZA8zMDEzMjM2NzU0NzEyNjEVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDQ3OTc0MDA3NDAzODU2NzEcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAzMTg1NTE4Njc4MzYwMTMzJQIcACXEARsHiAFzAzk2OQJjZAoyMDIyLTA0LTA4A3JjYgEwA2FwcBBCdXNpbmVzcyBNYW5hZ2VyAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwcxNDM2Ljk5AnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=X2wjiU4q9NAAX_BTovN&_nc_ht=video-ort2-2.xx&edm=APRAPSkEAAAA&oh=00_AT_mZx1JQMEJQdTaCvtEWSLmpVF8V3WaU92c5pfBmSZA-A&oe=62610965&_nc_rid=067503793372136",
      },
      {
        _id: "1c3",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.25447-2/10000000_279021031102816_4294971668671258505_n.mp4?_nc_cat=101&vs=51649558f28dd3d0&_nc_vs=HBksFQAYJEdJQ1dtQUJnbVhHbHhQMEFBSWxmaEJmNnpabzdibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFDMkpZQmRuWVFDQUxWUWN3c2Q1SlFmYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmwunpw9nTdBUCKAJDMxgLdnRzX3ByZXZpZXccF0CWdGl41P30GClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBA3MjEzODYzNTM1MzU0Njc5Em9lbV92aWRlb19hc3NldF9pZBAxMjUzNjE2NTIxODM0MzQwFW9lbV92aWRlb19yZXNvdXJjZV9pZA8yNTY1MjQ2NDMyODU2MDEcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAzMDk3NzkyMzI3MTAyMTU1JQIcACWOAhsIiAFzBDg5NDgCY2QKMjAyMi0wNC0xNgNyY2IBMANhcHAMUG93ZXIgRWRpdG9yAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwgxNDM3LjA4MwFmAmFkAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=FNFbYGBXI5YAX9iXCkJ&_nc_ht=video-msp1-1.xx&edm=APRAPSkEAAAA&oh=00_AT_dmZ5G2iIWF_KurXOcXzZ8x10pqkssvpbTjqRLVRiMeA&oe=6261C965&_nc_rid=634838041431663",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    movie_name: "One Piece",
    content:
      "Monkey D. Luffy, 1 cậu bé rất thích Đảo hải tặc có ước mơ tìm được kho báu One Piece và trở thành Vua hải tặc - Pirate King. Lúc nhỏ, Luffy tình cờ ăn phải trái quỉ (Devil Fruit) Gomu Gomu, nó cho cơ thể cậu khả năng co dãn đàn hồi như cao su nhưng đổi lại cậu sẽ không bao giờ biết bơi. Sau đó Luffy lại được Shank cứu thoát tuy nhiên ông ta bị mất 1 cánh tay. Sau đấy Shank chia tay Luffy và để lại cho cậu cái mũ rơm (Straw Hat) và nói rằng: Sau này bao giờ thành cướp biển hãy gặp ta và trả lại nó. Chính lời nói này đã thúc đầy Luffy trở thành 1 cướp biển thật sự.Hãy cùng theo dõi xem liệu Luffy có thể trở thành đạt được kho báu One Piece và trở thành Vua Hải Tặc không nhé.",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hành động" },
    genre_name: "Hành động",
    starRatingMovie: 3.5,
    posters: "https://animehay.club/upload/poster/34.jpg",
    status: "Hoàn Thành",
    release_year: "2017",
    list_episode: [
      {
        _id: "1d1",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t39.25447-2/10000000_162176936169804_2120930239966812405_n.mp4?_nc_cat=111&vs=50df5a3068ec583e&_nc_vs=HBksFQAYJEdJQ1dtQUJNMGF2Q2Y1TUFBUFVZbV9yUURtOGRibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFBYUJtdURZNWNBQU5qaGEzUGdSaE4wYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm7P7ujb3QexUCKAJDMxgLdnRzX3ByZXZpZXccF0CWu9DlYEGJGDRkYXNoX2k0bGl0ZWJhc2ljX3Bhc3N0aHJvdWdoYWxpZ25lZF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwmIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzY3ODcxODU3MDExMDE2MxJvZW1fdmlkZW9fYXNzZXRfaWQPMzAyMDkwMzM1MzIyMzg2FW9lbV92aWRlb19yZXNvdXJjZV9pZA8yNzE4NjI0NTE3ODk3NTAcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMDAwMzMzNTM3MjU3Njk1JQIcACXEARsHiAFzBDExOTkCY2QKMjAyMi0wMy0xMQNyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MIMTQ1NS4xNDkCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=AP_aAWqpm1cAX90nG3m&_nc_ht=video-lax3-2.xx&edm=APRAPSkEAAAA&oh=00_AT-za4ekT2X7TGpHoa7LRzNxrTEWEyJ3VgOHGS5mAzliNA&oe=62621C7C&_nc_rid=703504545658559",
      },
      {
        _id: "1d2",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_391262212813730_4048160989644914232_n.mp4?_nc_cat=104&vs=c4cc7c69bec70353&_nc_vs=HBksFQAYJEdJQ1dtQUNpY3pYVjJXTUJBRGpfWU5YNDlDMDRickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEM3FGTnJIWVVBQUNPRWs2LTJyWkJ6YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmwJKirrymhQEVAigDQzNlGAt2dHNfcHJldmlldxwXQJa70euFHrgYNGRhc2hfaTRsaXRlYmFzaWNfcGFzc3Rocm91Z2hhbGlnbmVkX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPMjc4NzczODA0NDExODkxEm9lbV92aWRlb19hc3NldF9pZBA1MjI5MzY0NzIzNzQ4NjE5FW9lbV92aWRlb19yZXNvdXJjZV9pZA8yOTMxMzEwMjk1OTUyOTYcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA80Nzg2NDQzNjA0MDYxMzklAhwAJcQBGweIAXMEOTE5MwJjZAoyMDIyLTAzLTEwA3JjYgEwA2FwcBBCdXNpbmVzcyBNYW5hZ2VyAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwgxNDU1LjEwMgJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=e-roetIKvbsAX8L-w70&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_GbXgEIJFOmDKz5L7nndKLHFcpZDvUQ9WIfrLnxrFEow&oe=625DC2FC&_nc_rid=155103027222613",
      },
      {
        _id: "1d3",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_974949059798759_2671652319041829169_n.mp4?_nc_cat=108&vs=52cce9616a92ad7f&_nc_vs=HBksFQAYJEdJQ1dtQURuSm1JRXRuWURBREU1MWdfaG5STWxickZxQUFBRhUAAsgBABUAGCRHSUNXbUFDYWxRaVdMYWtFQUtJMFpkUGF3c1o4YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm9JetqJrt1wEVAigCQzMYC3Z0c19wcmV2aWV3HBdAlsLT987ZFxg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA81MzMzMDg5MDgwOTgzMTkSb2VtX3ZpZGVvX2Fzc2V0X2lkDzQ3ODYwOTk1MDU3Njk1ORVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPNDc0NjY2MTM3NjU4ODc0HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNTEyOTQwODIzNTY0MTg4JQIcACXEARsHiAFzBDkzNzECY2QKMjAyMi0wMy0wMQNyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MIMTQ1Ni44NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=oGONRmtQdCUAX-Hm6DJ&_nc_ht=video-msp1-1.xx&edm=APRAPSkEAAAA&oh=00_AT_Hq_XbaXffWZVDKhJiBW8QL3iI3zUylBwp8zz4jtRPKQ&oe=625EED08&_nc_rid=548771541223409",
      },
      {
        _id: "1d4",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_1399840113805815_1674511194289664431_n.mp4?_nc_cat=104&vs=177cfe7e6f09f74e&_nc_vs=HBksFQAYJEdJQ1dtQUQzeWJtc0pma0VBSy14REN3UER6MFhickZxQUFBRhUAAsgBABUAGCRHSUNXbUFENmJwb1JxSUlBQU83OTNzSUJPZ3hUYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm%2FpX96v%2Bv5AMVAigCQzMYC3Z0c19wcmV2aWV3HBdAlrv87ZFocxg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAzMDQxNTY4MTM5NDI1MTAwEm9lbV92aWRlb19hc3NldF9pZA84MDA0NzcxMzQ2NzkwOTIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDEwNjUxNTE4NjczNjQ3MzUcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxNzU5MDgwNTYwOTY1MDQ0JQIcACXEARsHiAFzBDk2NjYCY2QKMjAyMi0wMy0wMgNyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MIMTQ1NS4xNDkCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=jtyBceift_wAX8nRukr&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT-rw2QRkFtOq5a9rt6JWOmwdAHIby0C6tjYhurpcOO4LQ&oe=625E6B28&_nc_rid=973743145132586",
      },
      {
        _id: "1d5",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.25447-2/10000000_1125049038256797_5315689542051083931_n.mp4?_nc_cat=103&vs=9c8bf6492add5971&_nc_vs=HBksFQAYJEdJQ1dtQUNkdWtma09mOERBSnUyTm9wNUg4VkpibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFEZGgwN0FrQ0FCQU5uRFlseDNXOVF3YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm5Obotf6IqgMVAigCQzMYC3Z0c19wcmV2aWV3HBdAluQGJN0vGxg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxMDIzMTk3MDk4MjM2MDI0Em9lbV92aWRlb19hc3NldF9pZA82NzQ5MzQ4MzM5NTk1NjUVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzkzNjkzODMxMzY4NTQyNhxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDczNzUwMTA5NTkyMDU1MzYlAhwAJcQBGweIAXMDNTYyAmNkCjIwMjItMDItMjMDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zBzE0NjUuMTgCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=VF4l5xBQAe0AX9kPJHo&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT-9jaGAjTFdGMchx8pVyN4h5xpXmFHJXGTnu9NJ9PvZJA&oe=6262118E&_nc_rid=892807356482925",
      },
      {
        _id: "1d6",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_3194781847507227_4778487682837736890_n.mp4?_nc_cat=109&vs=be6813de9302aa00&_nc_vs=HBksFQAYJEdJQ1dtQUFiMFNjZG8xa0xBTHB0SF9NNm1WQkNickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEZDJHZUhtYjBCQUZFWUN6TTBVcXBuYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm8p6q4%2FGzyAQVAigCQzMYC3Z0c19wcmV2aWV3HBdAl1p64UeuFBg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8yODM4MzM3NzM4NzI0MzQSb2VtX3ZpZGVvX2Fzc2V0X2lkDzMyMjEwNzA1MzI5Mzk3MBVvZW1fdmlkZW9fcmVzb3VyY2VfaWQQMTI4NTEyMTAyNTMyOTA4MRxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDEwMzczNzE4ODAxOTMyNTclAhwAJcQBGweIAXMENjU4NQJjZAoyMDIyLTAzLTA0A3JjYgEwA2FwcBBCdXNpbmVzcyBNYW5hZ2VyAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwgxNDk0Ljc2MgJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=FQzAlN7DeBQAX8dj1rq&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT-6-EDP_gYjM1-0rrswcxWIbZtqV2ta_gY9OFkk6xggLg&oe=625E66F0&_nc_rid=796156005759940",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    movie_name: "Shaman King (2021)",
    content:
      "Shaman là những cá nhân kiệt xuất với năng lực giao tiếp cùng hồn ma, tinh linh và thần, vốn vô hình với con người. Shaman Fight—trận chiến giữa những Shaman trên khắp thế giới—được tổ chức mỗi 500 năm 1 lần, nơi người thăng sẽ trở thành Shaman King. Danh hiệu này cho phép người đó kêu gọi Đại Tinh Linh và biến thế giới thành nơi mình muốn.",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hành động" },
    genre_name: "Hành động",
    starRatingMovie: 3.5,
    posters: "https://animehay.club/upload/poster/3207.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2016",
    list_episode: [
      {
        _id: "2a31",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_318750736902391_2170143492983779068_n.mp4?_nc_cat=106&vs=af5befcd9e339ea&_nc_vs=HBksFQAYJEdJQ1dtQUQzNkhIdzVpRUJBUHh1N0VvQzVoMGVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFBNENpVXlXaE1FQU1EUUtiMkVJSVE4YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmnPrKo5OpqwIVAigCQzMYC3Z0c19wcmV2aWV3HBdAlqgLQ5WBBhgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNjcwNjgzOTAwNzIyNjAyEm9lbV92aWRlb19hc3NldF9pZBAxMDcxMjc0ODYzNzQxMDg5FW9lbV92aWRlb19yZXNvdXJjZV9pZA82NTgyMTQ5MTU0OTc2MTQcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAzMDMwNjIxMTE3MTkwMDE0JQIcACXEARsHiAFzBDE5NDACY2QKMjAyMi0wMy0wMQNyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MIMTQ0OS45ODQCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=zERSw69WiqAAX8IQM1o&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT9ZFUJ6W6SNyxhpNS1ZJJNrzrGIpJ_Zseb4nB5iAVH0PQ&oe=625E221B&_nc_rid=385735656695749",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    movie_name: "Dragon Quest: Dai no Daibouken",
    content:
      "Từ rất xa xưa, có một vị kiếm khách chính nghĩa được gọi là dũng sĩ đã trải qua bao cuộc chiến đấu với ma vương để giải thoát con người khỏi những đau khổ. Vị dũng sĩ và những người bạn sau khi cùng nhau liên kết sức mạnh, vượt qua rất nhiều trận đấu cam go. Cuối cùng ma vương cũng đã bị đánh bại.",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hành động" },
    genre_name: "Hành động",
    starRatingMovie: 3,
    posters: "https://animehay.club/upload/poster/3100.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2021",
    list_episode: [
      {
        _id: "31a1",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_318750736902391_2170143492983779068_n.mp4?_nc_cat=106&vs=af5befcd9e339ea&_nc_vs=HBksFQAYJEdJQ1dtQUQzNkhIdzVpRUJBUHh1N0VvQzVoMGVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFBNENpVXlXaE1FQU1EUUtiMkVJSVE4YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmnPrKo5OpqwIVAigCQzMYC3Z0c19wcmV2aWV3HBdAlqgLQ5WBBhgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNjcwNjgzOTAwNzIyNjAyEm9lbV92aWRlb19hc3NldF9pZBAxMDcxMjc0ODYzNzQxMDg5FW9lbV92aWRlb19yZXNvdXJjZV9pZA82NTgyMTQ5MTU0OTc2MTQcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAzMDMwNjIxMTE3MTkwMDE0JQIcACXEARsHiAFzBDE5NDACY2QKMjAyMi0wMy0wMQNyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MIMTQ0OS45ODQCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=zERSw69WiqAAX8IQM1o&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT9ZFUJ6W6SNyxhpNS1ZJJNrzrGIpJ_Zseb4nB5iAVH0PQ&oe=625E221B&_nc_rid=385735656695749",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    movie_name: "Shachiku-san wa Youjo Yuurei ni Iyasaretai.",
    content:
      "Khi nô lệ của công ty, cô Fushihara làm việc đến nửa đêm, một cô gái ma nhỏ trở nên quan tâm và cố gắng bắt cô về nhà. Trong khi nói “Hãy rời đi ngay bây giờ”, cô gái ma hỗ trợ và cung cấp đồ uống giải khát của cô, xoa dịu trái tim của cô Fushihara bằng sự quý giá của cô.",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hài hước" },
    genre_name: "Hài hước",
    starRatingMovie: 4.5,
    posters: "https://animehay.club//upload/poster/3483.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2021",
    list_episode: [
      {
        _id: "1b31",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_134397259090217_7619294906167145046_n.mp4?_nc_cat=104&vs=9dfbd39578a6a13f&_nc_vs=HBksFQAYJEdJQ1dtQUFwQ2VQTU8zb0FBRll5Q1RGWkxMMXBickZxQUFBRhUAAsgBABUAGCRHQmxrWVJBWnF1aVNKT2NLQUp6WTh6VUxnOXhFYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmosDpy9jrbRUCKAJDMxgLdnRzX3ByZXZpZXccF0B3WU%2FfO2RaGClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA80ODU0NTk2MDk4MjM3NjESb2VtX3ZpZGVvX2Fzc2V0X2lkDzM3MTc4NTMzNDc5MDA2NxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjQxNTQzNjcxNTI1MzkzHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPMzM0OTU5NDk1MjM4NTM4JQIcACXEARsHiAFzBDE1MDQCY2QKMjAyMi0wMi0yOANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MHMzczLjcxNQJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=qzVNqFR8ZZ8AX_XednQ&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT9hqzuQeVrdsGRBG7GBWfEu5Tjf0VGBq_2GGCt7PAB_Hg&oe=625E032C&_nc_rid=404396386731638",
      },
      {
        _id: "1by2",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_1010460339585466_8474404633859160479_n.mp4?_nc_cat=104&vs=690ef603e53334b0&_nc_vs=HBksFQAYJEdJQ1dtQUM2d1praEFwY0RBSjk1R1h3ZElwdDFickZxQUFBRhUAAsgBABUAGCRHTXk0WFJCTjg0ZU5hVXdDQUt2NjRIM3J6NVVnYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmopO1t4H2qAMVAigCQzMYC3Z0c19wcmV2aWV3HBdAc2ml41P3zxgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNDgxMTg0OTEzNTU1NTY4Em9lbV92aWRlb19hc3NldF9pZA82MzU3MDgzODA4NDU4NjkVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzkzNDQxMzI3NzI0MjU3NxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzMyMzEyMzQ3OTc3NTM0OCUCHAAlxAEbB4gBcwQyNzYzAmNkCjIwMjItMDItMjUDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zBzMxMC43MjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=Y3PK-nDIgqMAX_C_1FB&_nc_ht=video-msp1-1.xx&edm=APRAPSkEAAAA&oh=00_AT9NXdJKT0VqcJ79Yd1lqmb_olkk2iDfY26XZyTihxbRdA&oe=625E6EFF&_nc_rid=062286664453733",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    movie_name: "Machikado Mazoku 2nd Season",
    content: "Mùa thứ 2 của anime Machikado Mazoku",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hài hước" },
    genre_name: "Hài hước",
    starRatingMovie: 3.5,
    posters: "https://animehay.club//upload/poster/3488.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2021",
    list_episode: [
      {
        _id: "7b1",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_134397259090217_7619294906167145046_n.mp4?_nc_cat=104&vs=9dfbd39578a6a13f&_nc_vs=HBksFQAYJEdJQ1dtQUFwQ2VQTU8zb0FBRll5Q1RGWkxMMXBickZxQUFBRhUAAsgBABUAGCRHQmxrWVJBWnF1aVNKT2NLQUp6WTh6VUxnOXhFYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmosDpy9jrbRUCKAJDMxgLdnRzX3ByZXZpZXccF0B3WU%2FfO2RaGClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA80ODU0NTk2MDk4MjM3NjESb2VtX3ZpZGVvX2Fzc2V0X2lkDzM3MTc4NTMzNDc5MDA2NxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjQxNTQzNjcxNTI1MzkzHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPMzM0OTU5NDk1MjM4NTM4JQIcACXEARsHiAFzBDE1MDQCY2QKMjAyMi0wMi0yOANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MHMzczLjcxNQJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=qzVNqFR8ZZ8AX_XednQ&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT9hqzuQeVrdsGRBG7GBWfEu5Tjf0VGBq_2GGCt7PAB_Hg&oe=625E032C&_nc_rid=404396386731638",
      },
      {
        _id: "1b42",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_1010460339585466_8474404633859160479_n.mp4?_nc_cat=104&vs=690ef603e53334b0&_nc_vs=HBksFQAYJEdJQ1dtQUM2d1praEFwY0RBSjk1R1h3ZElwdDFickZxQUFBRhUAAsgBABUAGCRHTXk0WFJCTjg0ZU5hVXdDQUt2NjRIM3J6NVVnYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmopO1t4H2qAMVAigCQzMYC3Z0c19wcmV2aWV3HBdAc2ml41P3zxgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNDgxMTg0OTEzNTU1NTY4Em9lbV92aWRlb19hc3NldF9pZA82MzU3MDgzODA4NDU4NjkVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzkzNDQxMzI3NzI0MjU3NxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzMyMzEyMzQ3OTc3NTM0OCUCHAAlxAEbB4gBcwQyNzYzAmNkCjIwMjItMDItMjUDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zBzMxMC43MjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=Y3PK-nDIgqMAX_C_1FB&_nc_ht=video-msp1-1.xx&edm=APRAPSkEAAAA&oh=00_AT9NXdJKT0VqcJ79Yd1lqmb_olkk2iDfY26XZyTihxbRdA&oe=625E6EFF&_nc_rid=062286664453733",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    movie_name: "Kawaii dake ja Nai Shikimori-san",
    content:
      'Phim kể câu chuyện tình yêu siêu ngọt ngào của cậu trai nhẹ nhàng Izumi và cô bạn gái Shikimori "siêu ngầu".',
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    genre_name: "Tình cảm",
    starRatingMovie: 3.5,
    posters: "https://animehay.club//upload/poster/3491.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2022",
    list_episode: [
      {
        _id: "5a1",
        path: "https://scontent.xx.fbcdn.net/v/t42.27313-2/10000000_134397259090217_7619294906167145046_n.mp4?_nc_cat=104&vs=9dfbd39578a6a13f&_nc_vs=HBksFQAYJEdJQ1dtQUFwQ2VQTU8zb0FBRll5Q1RGWkxMMXBickZxQUFBRhUAAsgBABUAGCRHQmxrWVJBWnF1aVNKT2NLQUp6WTh6VUxnOXhFYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmosDpy9jrbRUCKAJDMxgLdnRzX3ByZXZpZXccF0B3WU%2FfO2RaGClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA80ODU0NTk2MDk4MjM3NjESb2VtX3ZpZGVvX2Fzc2V0X2lkDzM3MTc4NTMzNDc5MDA2NxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjQxNTQzNjcxNTI1MzkzHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPMzM0OTU5NDk1MjM4NTM4JQIcACXEARsHiAFzBDE1MDQCY2QKMjAyMi0wMi0yOANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MHMzczLjcxNQJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=qzVNqFR8ZZ8AX_XednQ&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT9hqzuQeVrdsGRBG7GBWfEu5Tjf0VGBq_2GGCt7PAB_Hg&oe=625E032C&_nc_rid=404396386731638",
      },
      {
        _id: "5a2",
        path: "https://scontent.fhan4-1.fna.fbcdn.net/v/t42.27313-2/10000000_314590070704888_4116557833009711065_n.mp4?_nc_cat=104&vs=11594d783ddc5d74&_nc_vs=HBksFQAYJEdJQ1dtQUQ0Q21vMUhoNEJBTmxINWVXSjh5QTVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFDZEtmUXhoSzhDQUpuZEs0aFJqVFVGYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmzqqrgu35bxUCKAJDMxgLdnRzX3ByZXZpZXccF0CVfH752yLRGDRkYXNoX2k0bGl0ZWJhc2ljX3Bhc3N0aHJvdWdoYWxpZ25lZF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwmIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkEDEwNTE5ODU2NzUzNTI3MTYSb2VtX3ZpZGVvX2Fzc2V0X2lkDzM3NDQ2ODA3NDEyMDg5MRVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjQ2MTg0OTc3NzIyMDIzHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNjU4MjY3NDU4Nzc1MTExJQIcACXEARsHiAFzBDM4ODMCY2QKMjAyMi0wMi0yMgNyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MLMTM3NS4xMzE2NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=XXtF3pJjTXoAX9Od3Pj&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_tu9dOV7sDC18MYmxKry4kJ_J5UnYyqDzoQPG5CkRkNg&oe=625E59B4&_nc_rid=062136047446454",
      },
      {
        _id: "7a3",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_129682919590647_4162103689769722006_n.mp4?_nc_cat=102&vs=c32174d890c3c8db&_nc_vs=HBksFQAYJEdJQ1dtQUQzQ2xzbzhuVUFBSllnRVF0Qnc4STVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEM2lDVlg5S2dIQUJaTzVIVGZpbDFaYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm5sDA4K2NcxUCKANDM2UYC3Z0c19wcmV2aWV3HBdAlXx%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8yNzc3MDQwMjExNDcwODcSb2VtX3ZpZGVvX2Fzc2V0X2lkEDE0MDYzODAyNjk3OTM4MTIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzI1MzExNzE1MzY3NzM2MxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzI5OTAxMDg1MjIyMjAyOCUCHAAlxAEbB4gBcwQyMjMxAmNkCjIwMjItMDItMjIDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEzNzUuMTMxNjY3AnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=0-9sZB6f79oAX89P6sj&_nc_ht=video-lga3-2.xx&edm=APRAPSkEAAAA&oh=00_AT_Z0BdT2AYAor0W8CAi3UHxT9L-OW25s5UgwQdliIAJNA&oe=625E311C&_nc_rid=466861743439238",
      },
      {
        _id: "4a4",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_1111080303025887_8951257575088292101_n.mp4?_nc_cat=100&vs=4977db2240c695ae&_nc_vs=HBksFQAYJEdJQ1dtQURmWHNlS2hmSURBQVdCS2JoV1FUbDhickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEYTJGT0FkU3dCQUFJRnJtaVAxVlVIYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmzpGL4dvewwMVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXz%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxMzE2NzkxNTk4ODI1MTk5Em9lbV92aWRlb19hc3NldF9pZA82ODM2OTg3OTI5ODQwNDIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzk5MzM4NjcxMTU3MzYwNxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzI3MDg5OTA0NTIyNTY3OSUCHAAlxAEbB4gBcwQyMTgxAmNkCjIwMjItMDMtMDgDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEzNzUuMjQ4MzMzAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=6gsJGlK9wmEAX_sPAex&_nc_ht=video-lax3-2.xx&edm=APRAPSkEAAAA&oh=00_AT9mfKlNAcBFozqdVFxQk8zv-WMfRuqeTbO4RmGJouy5tg&oe=625E6D6E&_nc_rid=735945520436931",
      },
      {
        _id: "7a5",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_103719962257875_1455091531145287347_n.mp4?_nc_cat=102&vs=9ab66b573e79313b&_nc_vs=HBksFQAYJEdJQ1dtQURUcVlFdlZWNEFBTE1XbU1VSmhqRVVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFCdGM3N1hseThDQVA2bllYWWIwOUZvYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmupie0rKEuwIVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXx%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8zMjQyMzQ1NTI4NDI4NDkSb2VtX3ZpZGVvX2Fzc2V0X2lkDzMzMDAyMjkxNTcyMjkyMhVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPNjkyNzY3ODQyMDkyNTczHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNDcxNDI2MDgxMTIyNDk3JQIcACXEARsHiAFzBDM3MjMCY2QKMjAyMi0wMi0yNANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MLMTM3NS4xMzE2NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=S0D6zTg_700AX8YMw7F&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_r56g_cQhRTQytqCaXCZ02HCajNniMmebLMo5BiuEkTw&oe=625EAC4D&_nc_rid=917161800361883",
      },
    ],
  },
  {
    _id: "5b21cd6fbccd471821",
    movie_name: "Kawaii dake ja Nai ",
    content:
      'Phim kể câu chuyện tình yêu siêu ngọt ngào của cậu trai nhẹ nhàng Izumi và cô bạn gái Shikimori "siêu ngầu".',
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    genre_name: "Tình cảm",
    starRatingMovie: 3.5,
    posters: "https://animehay.club//upload/poster/3491.jpg",
    slide: true,
    status: "Hoàn Thành",
    release_year: "2022",
    list_episode: [
      {
        _id: "4a4",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_1111080303025887_8951257575088292101_n.mp4?_nc_cat=100&vs=4977db2240c695ae&_nc_vs=HBksFQAYJEdJQ1dtQURmWHNlS2hmSURBQVdCS2JoV1FUbDhickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEYTJGT0FkU3dCQUFJRnJtaVAxVlVIYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmzpGL4dvewwMVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXz%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxMzE2NzkxNTk4ODI1MTk5Em9lbV92aWRlb19hc3NldF9pZA82ODM2OTg3OTI5ODQwNDIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzk5MzM4NjcxMTU3MzYwNxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzI3MDg5OTA0NTIyNTY3OSUCHAAlxAEbB4gBcwQyMTgxAmNkCjIwMjItMDMtMDgDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEzNzUuMjQ4MzMzAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=6gsJGlK9wmEAX_sPAex&_nc_ht=video-lax3-2.xx&edm=APRAPSkEAAAA&oh=00_AT9mfKlNAcBFozqdVFxQk8zv-WMfRuqeTbO4RmGJouy5tg&oe=625E6D6E&_nc_rid=735945520436931",
      },
      {
        _id: "7a5",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_103719962257875_1455091531145287347_n.mp4?_nc_cat=102&vs=9ab66b573e79313b&_nc_vs=HBksFQAYJEdJQ1dtQURUcVlFdlZWNEFBTE1XbU1VSmhqRVVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFCdGM3N1hseThDQVA2bllYWWIwOUZvYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmupie0rKEuwIVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXx%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8zMjQyMzQ1NTI4NDI4NDkSb2VtX3ZpZGVvX2Fzc2V0X2lkDzMzMDAyMjkxNTcyMjkyMhVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPNjkyNzY3ODQyMDkyNTczHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNDcxNDI2MDgxMTIyNDk3JQIcACXEARsHiAFzBDM3MjMCY2QKMjAyMi0wMi0yNANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MLMTM3NS4xMzE2NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=S0D6zTg_700AX8YMw7F&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_r56g_cQhRTQytqCaXCZ02HCajNniMmebLMo5BiuEkTw&oe=625EAC4D&_nc_rid=917161800361883",
      },
    ],
  },
  {
    _id: "5b21cd6fbcdsfdffsdfcd471821",
    movie_name: "Kawaii  ",
    content:
      'Phim kể câu chuyện tình yêu siêu ngọt ngào của cậu trai nhẹ nhàng Izumi và cô bạn gái Shikimori "siêu ngầu".',
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    genre_name: "Tình cảm",
    starRatingMovie: 3.5,
    posters: "https://animehay.club//upload/poster/3491.jpg",
    slide: false,
    status: "Hoàn Thành",
    release_year: "2022",
    list_episode: [
      {
        _id: "4asd4",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_1111080303025887_8951257575088292101_n.mp4?_nc_cat=100&vs=4977db2240c695ae&_nc_vs=HBksFQAYJEdJQ1dtQURmWHNlS2hmSURBQVdCS2JoV1FUbDhickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEYTJGT0FkU3dCQUFJRnJtaVAxVlVIYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmzpGL4dvewwMVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXz%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxMzE2NzkxNTk4ODI1MTk5Em9lbV92aWRlb19hc3NldF9pZA82ODM2OTg3OTI5ODQwNDIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzk5MzM4NjcxMTU3MzYwNxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzI3MDg5OTA0NTIyNTY3OSUCHAAlxAEbB4gBcwQyMTgxAmNkCjIwMjItMDMtMDgDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEzNzUuMjQ4MzMzAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=6gsJGlK9wmEAX_sPAex&_nc_ht=video-lax3-2.xx&edm=APRAPSkEAAAA&oh=00_AT9mfKlNAcBFozqdVFxQk8zv-WMfRuqeTbO4RmGJouy5tg&oe=625E6D6E&_nc_rid=735945520436931",
      },
      {
        _id: "7asd5",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_103719962257875_1455091531145287347_n.mp4?_nc_cat=102&vs=9ab66b573e79313b&_nc_vs=HBksFQAYJEdJQ1dtQURUcVlFdlZWNEFBTE1XbU1VSmhqRVVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFCdGM3N1hseThDQVA2bllYWWIwOUZvYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmupie0rKEuwIVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXx%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8zMjQyMzQ1NTI4NDI4NDkSb2VtX3ZpZGVvX2Fzc2V0X2lkDzMzMDAyMjkxNTcyMjkyMhVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPNjkyNzY3ODQyMDkyNTczHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNDcxNDI2MDgxMTIyNDk3JQIcACXEARsHiAFzBDM3MjMCY2QKMjAyMi0wMi0yNANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MLMTM3NS4xMzE2NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=S0D6zTg_700AX8YMw7F&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_r56g_cQhRTQytqCaXCZ02HCajNniMmebLMo5BiuEkTw&oe=625EAC4D&_nc_rid=917161800361883",
      },
    ],
  },
  {
    _id: "5b21cddsssssdsdfcd471821",
    movie_name: "Kawaii axinomoto ",
    content:
      'Phim kể câu chuyện tình yêu siêu ngọt ngào của cậu trai nhẹ nhàng Izumi và cô bạn gái Shikimori "siêu ngầu".',
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
    genre_name: "Tình cảm",
    starRatingMovie: 3.5,
    posters: "https://animehay.club//upload/poster/3491.jpg",
    slide: false,
    status: "Hoàn Thành",
    release_year: "2022",
    list_episode: [
      {
        _id: "4asdsadf4",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_1111080303025887_8951257575088292101_n.mp4?_nc_cat=100&vs=4977db2240c695ae&_nc_vs=HBksFQAYJEdJQ1dtQURmWHNlS2hmSURBQVdCS2JoV1FUbDhickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEYTJGT0FkU3dCQUFJRnJtaVAxVlVIYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmzpGL4dvewwMVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXz%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxMzE2NzkxNTk4ODI1MTk5Em9lbV92aWRlb19hc3NldF9pZA82ODM2OTg3OTI5ODQwNDIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzk5MzM4NjcxMTU3MzYwNxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzI3MDg5OTA0NTIyNTY3OSUCHAAlxAEbB4gBcwQyMTgxAmNkCjIwMjItMDMtMDgDcmNiATADYXBwEEJ1c2luZXNzIE1hbmFnZXICY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEzNzUuMjQ4MzMzAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=6gsJGlK9wmEAX_sPAex&_nc_ht=video-lax3-2.xx&edm=APRAPSkEAAAA&oh=00_AT9mfKlNAcBFozqdVFxQk8zv-WMfRuqeTbO4RmGJouy5tg&oe=625E6D6E&_nc_rid=735945520436931",
      },
      {
        _id: "7asd11115",
        path: "https://scontent.fhan4-2.fna.fbcdn.net/v/t42.27313-2/10000000_103719962257875_1455091531145287347_n.mp4?_nc_cat=102&vs=9ab66b573e79313b&_nc_vs=HBksFQAYJEdJQ1dtQURUcVlFdlZWNEFBTE1XbU1VSmhqRVVickZxQUFBRhUAAsgBABUAGCRHSUNXbUFCdGM3N1hseThDQVA2bllYWWIwOUZvYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmupie0rKEuwIVAigCQzMYC3Z0c19wcmV2aWV3HBdAlXx%2B%2Bdsi0Rg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsJiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8zMjQyMzQ1NTI4NDI4NDkSb2VtX3ZpZGVvX2Fzc2V0X2lkDzMzMDAyMjkxNTcyMjkyMhVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPNjkyNzY3ODQyMDkyNTczHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNDcxNDI2MDgxMTIyNDk3JQIcACXEARsHiAFzBDM3MjMCY2QKMjAyMi0wMi0yNANyY2IBMANhcHAQQnVzaW5lc3MgTWFuYWdlcgJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MLMTM3NS4xMzE2NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=S0D6zTg_700AX8YMw7F&_nc_ht=video-lax3-1.xx&edm=APRAPSkEAAAA&oh=00_AT_r56g_cQhRTQytqCaXCZ02HCajNniMmebLMo5BiuEkTw&oe=625EAC4D&_nc_rid=917161800361883",
      },
    ],
  },
  
];

export function getEpisode(movie, id) {
  const episode = movie.list_episode.find((e) => e._id === id);
  let currentIndex = movie.list_episode.indexOf(episode);
  ++currentIndex;
  return {
    path: episode.path,
    index: currentIndex,
  };
}

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}

export function getSlide() {
  return movies.filter((item) => item.slide === true);
}
