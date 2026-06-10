using Microsoft.EntityFrameworkCore;
using ReserVou.Repositorio.Interfaces;
using ReserVou.Repositorio.Repositories;
using ReserVou.Servico.Interfaces;
using ReserVou.Servico.Services;
using ReserVou.Repositorio.DBContexts;

var builder = WebApplication.CreateBuilder(args);

// --------------------------------------
// 1️⃣ SERVICES (antes do Build)
// --------------------------------------

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Banco InMemory
builder.Services.AddDbContext<EstabelecimentoDBContext>(opt =>
    opt.UseInMemoryDatabase("EstabelecimentosDb"));

builder.Services.AddDbContext<UsuarioDBContext>(opt =>
    opt.UseInMemoryDatabase("UsuariosDb"));

// Injeções de dependência
builder.Services.AddScoped<IEstabelecimentoRepositorio, EstabelecimentoRepositorio>();
builder.Services.AddScoped<IEstabelecimentoServico, EstabelecimentoServico>();
builder.Services.AddScoped<IUsuarioRepositorio, UsuarioRepositorio>();
builder.Services.AddScoped<IUsuarioServico, UsuarioServico>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost4200",
        policy => policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
    );

    options.AddPolicy("AllowAngular",
        policy => policy
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
    );
});

// --------------------------------------
// 2️⃣ BUILD
// --------------------------------------

var app = builder.Build();

// --------------------------------------
// 3️⃣ MIDDLEWARE PIPELINE (depois do Build)
// --------------------------------------

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// escolha APENAS um CORS!
// recomendo usar o específico para o Angular local:
app.UseCors("AllowLocalhost4200");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// --------------------------------------
// 4️⃣ RUN
// --------------------------------------
app.Run();
