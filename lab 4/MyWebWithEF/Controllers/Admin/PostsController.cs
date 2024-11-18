﻿using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace MyWebWithEF.Controllers.Admin.Base
{
    public class PostsController : AdminApiController
    {
        private readonly PostService _postService;
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public PostsController(PostService postService, ApplicationDbContext context, IMapper mapper)
        {
            _postService = postService;
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostDto>>> GetPosts()
        {
            var posts = await _postService.GetAllPostsAsync();
            var postDtos = _mapper.Map<List<PostDto>>(posts);
            return Ok(postDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PostDto>> GetPost(int id)
        {
            var post = await _postService.GetPostByIdAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            var postDto = _mapper.Map<PostDto>(post);
            return Ok(postDto);
        }

        [HttpPost]
        public async Task<ActionResult<PostDto>> CreatePost(PostEditDto model)
        {
            var post = await _postService.AddPost(model);

            await _context.SaveChangesAsync();

            var postDto = _mapper.Map<PostDto>(post);
            return Ok(postDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(int id, PostEditDto model)
        {
            model.Id = id;

            var post = _postService.UpdatePost(model);

            await _context.SaveChangesAsync();

            var categoryDto = _mapper.Map<PostDto>(post);
            return Ok(categoryDto);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var deleted = _postService.DeletePost(id);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}