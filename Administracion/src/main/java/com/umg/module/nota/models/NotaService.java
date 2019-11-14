package com.umg.module.nota.models;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NotaService {
	@Autowired
    private EntityManager entityManager;
    
	@SuppressWarnings("unchecked")
	public List<Nota> ConsultarPorUsuario(int id_usuario) {
		StoredProcedureQuery storedProcedureQuery = this.entityManager.createNamedStoredProcedureQuery("ConsultarPorUsuario");
		storedProcedureQuery.setParameter("id_usuario", id_usuario);
		storedProcedureQuery.execute();
		return storedProcedureQuery.getResultList();
	}

}
