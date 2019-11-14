package com.umg.module.nota.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.umg.module.nota.models.Nota;

public interface NotaRepository extends JpaRepository<Nota, Integer> {

}
