using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;

namespace Angular4CountryWeb
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.MapWhen(IsApiPath, builder => builder.RunProxy(new ProxyOptions
            {
                Scheme = "http",
                Host = "services.groupkt.com",
                Port = "80"
            }));
            
            app.Use(async (context, next) =>
            {
                await next();
				
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !IsApiPath(context))
                {
                    context.Request.Path = "/index.html";
                    context.Response.StatusCode = 200;
                    await next();
                }
            });
			
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }

        private static bool IsApiPath(HttpContext context)
        {
            return context.Request.Path.Value.StartsWith(@"/country/", StringComparison.OrdinalIgnoreCase);
        }
    }
}
