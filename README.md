# sam-date-handler

Um serviço para manipilar data.

funções:

####convertDateToNewDate:
* parametro: string no formato "ISO_8601_TIME_FORMAT"
* retorno: new Date respeitando o GMT passado na string.

####newDateWithGMT:
* parametros:
    ```
    offset: o fuso horario
    date: a data a ser modificada
    localTimeZone: parametro opcional
    ```

  ```
  localTimeZone: {
      useDaylightSaving: 'se utiliza horario de verão (true, false)',
      offsetDaylightSaving: 'se o horario de verão é +1 (1) ou -1(2)',
      daylightSavingStartDate: 'a data de inicio do horario de verão no formato "yyyy-mm-dd"',
      daylightSavingFinishDate: ' a data final do horario de verão no formato "yyyy-mm-dd"'
    }
    ```

* retorno new Date para o formato "ISO_8601_TIME_FORMAT";

