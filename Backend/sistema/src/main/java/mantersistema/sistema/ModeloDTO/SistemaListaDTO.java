package mantersistema.sistema.ModeloDTO;

import java.util.List;
import java.util.stream.Collectors;

import mantersistema.sistema.Modelo.Sistema;
import mantersistema.sistema.Modelo.Status;

public class SistemaListaDTO {

    private int id;

    private String descricao;

    private String sigla;

    private String email;

    private String url;

    private Status status;


    public SistemaListaDTO(Sistema sistema) {
        this.id = sistema.getId();
        this.descricao = sistema.getDescricao();
        this.sigla = sistema.getSigla();
        this.email = sistema.getEmail();
        this.url = sistema.getUrl();
        this.status = sistema.getStatus();
    }

    public static List<SistemaListaDTO> converter(List<Sistema> sistemas){
        return sistemas.stream().map(SistemaListaDTO::new).collect(Collectors.toList());
    }
	

    public int getId() {
        return this.id;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public String getSigla() {
        return this.sigla;
    }

    public String getEmail() {
        return this.email;
    }

    public String getUrl() {
        return this.url;
    }

    public Status getStatus() {
        return this.status;
    }
    


}
