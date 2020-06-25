package mantersistema.sistema.API;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import mantersistema.sistema.Modelo.Sistema;
import mantersistema.sistema.ModeloDTO.SistemaAtualizarDTO;
import mantersistema.sistema.ModeloDTO.SistemaCadastroDTO;
import mantersistema.sistema.ModeloDTO.SistemaDetalheDTO;
import mantersistema.sistema.ModeloDTO.SistemaListaDTO;
import mantersistema.sistema.Repostorio.Repositorio;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/sistema")
public class SistemaAPI {

    @Autowired
    private Repositorio repositorio;

    @CrossOrigin
    @GetMapping
    public List<SistemaListaDTO> listarSistema() {
        List<Sistema> sistemas = repositorio.findAll();
        return SistemaListaDTO.converter(sistemas);
    }

    /*
     * @GetMapping public List<SistemaListaDTO> listarSistema(String texto) {
     * List<Sistema> sistemas = repositorio.findAll(); return
     * SistemaListaDTO.converter(sistemas); if(texto == null){ List<Sistema>
     * sistemas = repositorio.findAll(); return SistemaListaDTO.converter(sistemas);
     * } else{ List<Sistema> sistemas = repositorio.findByDescricao(texto); return
     * SistemaListaDTO.converter(sistemas); } }
     */

    @CrossOrigin
    @GetMapping("/{id}")
    public SistemaDetalheDTO detalhar(@PathVariable int id) {
        Sistema sistema = repositorio.getOne(id);
        return new SistemaDetalheDTO(sistema);
    }

    @CrossOrigin
    @PostMapping
    @Transactional
    public ResponseEntity<SistemaListaDTO> cadastrarSistema(@RequestBody SistemaCadastroDTO dto, UriComponentsBuilder uriBuilder) {
        Sistema sistema = dto.cadastro();         
        repositorio.save(sistema);
        URI uri = uriBuilder.path("/sistema/{id}").buildAndExpand(sistema.getId()).toUri(); 
        return ResponseEntity.created(uri).body(new SistemaListaDTO(sistema));
    }
    
    @CrossOrigin
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<SistemaDetalheDTO> alterarSistema(@PathVariable int id, @RequestBody SistemaAtualizarDTO dto) {
        Sistema sistema = dto.atualizar(id, repositorio);
        repositorio.save(sistema);
        return ResponseEntity.ok(new SistemaDetalheDTO(sistema));
    }
    /*
    @CrossOrigin
    @PutMapping("/sistema")
    public Sistema atualizar(@RequestBody Sistema sistema){
        return repositorio.save(sistema);
    }
    @DeleteMapping
    public void deleteSistema() {
        
    }*/

}