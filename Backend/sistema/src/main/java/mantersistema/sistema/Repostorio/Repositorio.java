package mantersistema.sistema.Repostorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import mantersistema.sistema.Modelo.Sistema;

public interface Repositorio extends JpaRepository<Sistema, Integer>{
    
    List<Sistema> findByDescricao(String descricao);
}