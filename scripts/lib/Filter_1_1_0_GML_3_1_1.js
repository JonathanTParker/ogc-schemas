var Filter_1_1_0_GML_3_1_1_Module_Factory = function () {
  var GML_3_1_1 = {
    n: 'GML_3_1_1',
    dens: 'http:\/\/www.opengis.net\/gml',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0'],
    tis: [{
        ln: 'AbstractTimeComplexType',
        bti: '.AbstractTimeObjectType'
      }, {
        ln: 'PointType',
        bti: '.AbstractGeometricPrimitiveType',
        ps: [{
            n: 'pos',
            ti: '.DirectPositionType'
          }, {
            n: 'coordinates',
            ti: '.CoordinatesType'
          }, {
            n: 'coord',
            ti: '.CoordType'
          }]
      }, {
        ln: 'TimePositionType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l'
            },
            t: 'v'
          }, {
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }, {
            n: 'calendarEraName',
            an: {
              lp: 'calendarEraName'
            },
            t: 'a'
          }, {
            n: 'indeterminatePosition',
            an: {
              lp: 'indeterminatePosition'
            },
            t: 'a'
          }]
      }, {
        ln: 'StringOrRefType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'DirectPositionType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Double'
            },
            t: 'v'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'Integer',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'DataBlockType',
        ps: [{
            n: 'rangeParameters',
            ti: '.RangeParametersType'
          }, {
            n: 'tupleList',
            ti: '.CoordinatesType'
          }, {
            n: 'doubleOrNullTupleList',
            ti: {
              t: 'l'
            }
          }]
      }, {
        ln: 'DirectionPropertyType',
        ps: [{
            n: 'directionVector',
            en: 'DirectionVector',
            ti: '.DirectionVectorType'
          }, {
            n: 'compassPoint',
            en: 'CompassPoint'
          }, {
            n: 'directionKeyword',
            en: 'DirectionKeyword',
            ti: '.CodeType'
          }, {
            n: 'directionString',
            en: 'DirectionString',
            ti: '.StringOrRefType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'GeometricComplexType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'element',
            col: true,
            ti: '.GeometricPrimitivePropertyType'
          }]
      }, {
        ln: 'AbstractSolidType',
        bti: '.AbstractGeometricPrimitiveType'
      }, {
        ln: 'RectifiedGridDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'QuantityExtentType',
        bti: '.MeasureOrNullListType'
      }, {
        ln: 'PriorityLocationPropertyType',
        bti: '.LocationPropertyType',
        ps: [{
            n: 'priority',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'EnvelopeType',
        ps: [{
            n: 'lowerCorner',
            ti: '.DirectPositionType'
          }, {
            n: 'upperCorner',
            ti: '.DirectPositionType'
          }, {
            n: 'coord',
            col: true,
            ti: '.CoordType'
          }, {
            n: 'pos',
            col: true,
            ti: '.DirectPositionType'
          }, {
            n: 'coordinates',
            ti: '.CoordinatesType'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'Integer',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'TargetPropertyType',
        ps: [{
            n: 'feature',
            mx: false,
            dom: false,
            typed: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }, {
            n: 'geometry',
            mx: false,
            dom: false,
            typed: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'RangeParametersType',
        ps: [{
            n: '_boolean',
            en: 'Boolean',
            ti: 'Boolean'
          }, {
            n: 'category',
            en: 'Category',
            ti: '.CodeType'
          }, {
            n: 'quantity',
            en: 'Quantity',
            ti: '.MeasureType'
          }, {
            n: 'count',
            en: 'Count',
            ti: 'Integer'
          }, {
            n: 'booleanList',
            en: 'BooleanList',
            ti: {
              t: 'l'
            }
          }, {
            n: 'categoryList',
            en: 'CategoryList',
            ti: '.CodeOrNullListType'
          }, {
            n: 'quantityList',
            en: 'QuantityList',
            ti: '.MeasureOrNullListType'
          }, {
            n: 'countList',
            en: 'CountList',
            ti: {
              t: 'l'
            }
          }, {
            n: 'categoryExtent',
            en: 'CategoryExtent',
            ti: '.CategoryExtentType'
          }, {
            n: 'quantityExtent',
            en: 'QuantityExtent',
            ti: '.QuantityExtentType'
          }, {
            n: 'countExtent',
            en: 'CountExtent',
            ti: {
              t: 'l'
            }
          }, {
            n: 'compositeValue',
            mx: false,
            dom: false,
            typed: false,
            en: 'CompositeValue',
            ti: '.CompositeValueType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'IdentifierType',
        ps: [{
            n: 'name',
            mx: false,
            dom: false,
            typed: false,
            ti: '.CodeType',
            t: 'er'
          }, {
            n: 'version'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'MultiSolidDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'CodeOrNullListType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l'
            },
            t: 'v'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoordType',
        ps: [{
            n: 'x',
            en: 'X',
            ti: 'Decimal'
          }, {
            n: 'y',
            en: 'Y',
            ti: 'Decimal'
          }, {
            n: 'z',
            en: 'Z',
            ti: 'Decimal'
          }]
      }, {
        ln: 'ValueArrayType',
        bti: '.CompositeValueType',
        ps: [{
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'VectorType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Double'
            },
            t: 'v'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'Integer',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'FeatureCollectionType',
        bti: '.AbstractFeatureCollectionType'
      }, {
        ln: 'AbstractGeometryType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'gid',
            an: {
              lp: 'gid'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'Integer',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractGeometricAggregateType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'ArrayAssociationType',
        ps: [{
            n: 'object',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: '_Object',
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'AssociationType',
        ps: [{
            n: 'object',
            mx: false,
            dom: false,
            typed: false,
            en: '_Object',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'FileType',
        ps: [{
            n: 'rangeParameters',
            ti: '.RangeParametersType'
          }, {
            n: 'fileName'
          }, {
            n: 'fileStructure'
          }, {
            n: 'mimeType'
          }, {
            n: 'compression'
          }]
      }, {
        ln: 'MeasureOrNullListType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l'
            },
            t: 'v'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiCurveDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'CoordinatesType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'decimal',
            an: {
              lp: 'decimal'
            },
            t: 'a'
          }, {
            n: 'cs',
            an: {
              lp: 'cs'
            },
            t: 'a'
          }, {
            n: 'ts',
            an: {
              lp: 'ts'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractGMLType',
        ps: [{
            n: 'metaDataProperty',
            col: true,
            ti: '.MetaDataPropertyType'
          }, {
            n: 'description',
            ti: '.StringOrRefType'
          }, {
            n: 'name',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            ti: '.CodeType',
            t: 'er'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractMetaDataType',
        ps: [{
            n: 'content',
            t: 'v'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractRingType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'BoundingShapeType',
        ps: [{
            n: 'envelope',
            mx: false,
            dom: false,
            typed: false,
            en: 'Envelope',
            ti: '.EnvelopeType',
            t: 'er'
          }, {
            n: '_null',
            en: 'Null',
            ti: {
              t: 'l'
            }
          }]
      }, {
        ln: 'TimePrimitivePropertyType',
        ps: [{
            n: 'timePrimitive',
            mx: false,
            dom: false,
            typed: false,
            en: '_TimePrimitive',
            ti: '.AbstractTimePrimitiveType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'RangeSetType',
        ps: [{
            n: 'valueArray',
            col: true,
            en: 'ValueArray',
            ti: '.ValueArrayType'
          }, {
            n: 'scalarValueList',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [{
                en: 'CategoryList',
                ti: '.CodeOrNullListType'
              }, {
                en: 'QuantityList',
                ti: '.MeasureOrNullListType'
              }, {
                en: 'CountList',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'BooleanList',
                ti: {
                  t: 'l'
                }
              }],
            t: 'ers'
          }, {
            n: 'dataBlock',
            en: 'DataBlock',
            ti: '.DataBlockType'
          }, {
            n: 'file',
            en: 'File',
            ti: '.FileType'
          }]
      }, {
        ln: 'MetaDataPropertyType',
        ps: [{
            n: 'any',
            mx: false,
            t: 'ae'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'ReferenceType',
        ps: [{
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'ObservationType',
        bti: '.AbstractFeatureType',
        ps: [{
            n: 'validTime',
            ti: '.TimePrimitivePropertyType'
          }, {
            n: 'using',
            ti: '.FeaturePropertyType'
          }, {
            n: 'target',
            mx: false,
            dom: false,
            typed: false,
            ti: '.TargetPropertyType',
            t: 'er'
          }, {
            n: 'resultOf',
            ti: '.AssociationType'
          }]
      }, {
        ln: 'MultiSurfaceDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'GeometryArrayPropertyType',
        ps: [{
            n: 'geometry',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }]
      }, {
        ln: 'AbstractTimeObjectType',
        bti: '.AbstractGMLType'
      }, {
        ln: 'AbstractTimeSliceType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'validTime',
            ti: '.TimePrimitivePropertyType'
          }, {
            n: 'dataSource',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'FeaturePropertyType',
        ps: [{
            n: 'feature',
            mx: false,
            dom: false,
            typed: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'AngleType',
        bti: '.MeasureType'
      }, {
        ln: 'AbstractCoverageType',
        bti: '.AbstractFeatureType',
        ps: [{
            n: 'domainSet',
            mx: false,
            dom: false,
            typed: false,
            ti: '.DomainSetType',
            t: 'er'
          }, {
            n: 'rangeSet',
            ti: '.RangeSetType'
          }, {
            n: 'dimension',
            ti: 'Integer',
            an: {
              lp: 'dimension'
            },
            t: 'a'
          }]
      }, {
        ln: 'ValueArrayPropertyType',
        ps: [{
            n: 'value',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [{
                en: 'CategoryList',
                ti: '.CodeOrNullListType'
              }, {
                en: 'Count',
                ti: 'Integer'
              }, {
                en: '_Object',
                ti: 'AnyType'
              }, {
                en: 'CompositeValue',
                ti: '.CompositeValueType'
              }, {
                en: 'Boolean',
                ti: 'Boolean'
              }, {
                en: 'CountList',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'QuantityExtent',
                ti: '.QuantityExtentType'
              }, {
                en: 'Quantity',
                ti: '.MeasureType'
              }, {
                en: 'CountExtent',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'QuantityList',
                ti: '.MeasureOrNullListType'
              }, {
                en: 'Category',
                ti: '.CodeType'
              }, {
                en: 'Null',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'BooleanList',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'CategoryExtent',
                ti: '.CategoryExtentType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'AbstractSurfaceType',
        bti: '.AbstractGeometricPrimitiveType'
      }, {
        ln: 'AbstractTimeGeometricPrimitiveType',
        bti: '.AbstractTimePrimitiveType',
        ps: [{
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiPointDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'ValuePropertyType',
        ps: [{
            n: '_boolean',
            en: 'Boolean',
            ti: 'Boolean'
          }, {
            n: 'category',
            en: 'Category',
            ti: '.CodeType'
          }, {
            n: 'quantity',
            en: 'Quantity',
            ti: '.MeasureType'
          }, {
            n: 'count',
            en: 'Count',
            ti: 'Integer'
          }, {
            n: 'booleanList',
            en: 'BooleanList',
            ti: {
              t: 'l'
            }
          }, {
            n: 'categoryList',
            en: 'CategoryList',
            ti: '.CodeOrNullListType'
          }, {
            n: 'quantityList',
            en: 'QuantityList',
            ti: '.MeasureOrNullListType'
          }, {
            n: 'countList',
            en: 'CountList',
            ti: {
              t: 'l'
            }
          }, {
            n: 'categoryExtent',
            en: 'CategoryExtent',
            ti: '.CategoryExtentType'
          }, {
            n: 'quantityExtent',
            en: 'QuantityExtent',
            ti: '.QuantityExtentType'
          }, {
            n: 'countExtent',
            en: 'CountExtent',
            ti: {
              t: 'l'
            }
          }, {
            n: 'compositeValue',
            mx: false,
            dom: false,
            typed: false,
            en: 'CompositeValue',
            ti: '.CompositeValueType',
            t: 'er'
          }, {
            n: 'object',
            mx: false,
            dom: false,
            typed: false,
            en: '_Object',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: '_null',
            en: 'Null',
            ti: {
              t: 'l'
            }
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'RelatedTimeType',
        bti: '.TimePrimitivePropertyType',
        ps: [{
            n: 'relativePosition',
            an: {
              lp: 'relativePosition'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeometryPropertyType',
        ps: [{
            n: 'geometry',
            mx: false,
            dom: false,
            typed: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'MovingObjectStatusType',
        bti: '.AbstractTimeSliceType',
        ps: [{
            n: 'location',
            mx: false,
            dom: false,
            typed: false,
            ti: '.LocationPropertyType',
            t: 'er'
          }, {
            n: 'speed',
            ti: '.MeasureType'
          }, {
            n: 'bearing',
            ti: '.DirectionPropertyType'
          }, {
            n: 'acceleration',
            ti: '.MeasureType'
          }, {
            n: 'elevation',
            ti: '.MeasureType'
          }, {
            n: 'status',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'AbstractTimeTopologyPrimitiveType',
        bti: '.AbstractTimePrimitiveType',
        ps: [{
            n: 'complex',
            ti: '.ReferenceType'
          }]
      }, {
        ln: 'AbstractFeatureType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'boundedBy',
            ti: '.BoundingShapeType'
          }, {
            n: 'location',
            mx: false,
            dom: false,
            typed: false,
            ti: '.LocationPropertyType',
            t: 'er'
          }]
      }, {
        ln: 'GridDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'AbstractCurveType',
        bti: '.AbstractGeometricPrimitiveType'
      }, {
        ln: 'CodeType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'CategoryExtentType',
        bti: '.CodeOrNullListType'
      }, {
        ln: 'DirectionVectorType',
        ps: [{
            n: 'vector',
            ti: '.VectorType'
          }, {
            n: 'horizontalAngle',
            ti: '.AngleType'
          }, {
            n: 'verticalAngle',
            ti: '.AngleType'
          }]
      }, {
        ln: 'FeatureArrayPropertyType',
        ps: [{
            n: 'feature',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }]
      }, {
        ln: 'DomainSetType',
        ps: [{
            n: 'geometry',
            mx: false,
            dom: false,
            typed: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'timeObject',
            mx: false,
            dom: false,
            typed: false,
            en: '_TimeObject',
            ti: '.AbstractTimeObjectType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'CompositeValueType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'valueComponent',
            col: true,
            ti: '.ValuePropertyType'
          }, {
            n: 'valueComponents',
            ti: '.ValueArrayPropertyType'
          }]
      }, {
        ln: 'GeometricPrimitivePropertyType',
        ps: [{
            n: 'geometricPrimitive',
            mx: false,
            dom: false,
            typed: false,
            en: '_GeometricPrimitive',
            ti: '.AbstractGeometricPrimitiveType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'MeasureType',
        ps: [{
            n: 'value',
            ti: 'Double',
            t: 'v'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractFeatureCollectionType',
        bti: '.AbstractFeatureType',
        ps: [{
            n: 'featureMember',
            col: true,
            ti: '.FeaturePropertyType'
          }, {
            n: 'featureMembers',
            ti: '.FeatureArrayPropertyType'
          }]
      }, {
        ln: 'EnvelopeWithTimePeriodType',
        bti: '.EnvelopeType',
        ps: [{
            n: 'timePosition',
            col: true,
            ti: '.TimePositionType'
          }, {
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractGeometricPrimitiveType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'LocationPropertyType',
        ps: [{
            n: 'geometry',
            mx: false,
            dom: false,
            typed: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'locationKeyWord',
            en: 'LocationKeyWord',
            ti: '.CodeType'
          }, {
            n: 'locationString',
            en: 'LocationString',
            ti: '.StringOrRefType'
          }, {
            n: '_null',
            en: 'Null',
            ti: {
              t: 'l'
            }
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'AbstractTimePrimitiveType',
        bti: '.AbstractTimeObjectType',
        ps: [{
            n: 'relatedTime',
            col: true,
            ti: '.RelatedTimeType'
          }]
      }, {
        t: 'enum',
        ln: 'FileValueModelType',
        vs: ['Record Interleaved']
      }, {
        t: 'enum',
        ln: 'TimeIndeterminateValueType',
        vs: ['after', 'before', 'now', 'unknown']
      }, {
        t: 'enum',
        ln: 'CompassPointEnumeration',
        vs: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
      }],
    eis: [{
        en: 'multiSolidDomain',
        ti: '.MultiSolidDomainType',
        sh: 'domainSet'
      }, {
        en: 'Point',
        ti: '.PointType',
        sh: '_GeometricPrimitive'
      }, {
        en: 'Observation',
        ti: '.ObservationType',
        sh: '_Feature'
      }, {
        en: 'subject',
        ti: '.TargetPropertyType',
        sh: 'target'
      }, {
        en: 'priorityLocation',
        ti: '.PriorityLocationPropertyType',
        sh: 'location'
      }, {
        en: '_ImplicitGeometry',
        ti: '.AbstractGeometryType',
        sh: '_Geometry'
      }, {
        en: '_GeometricAggregate',
        ti: '.AbstractGeometricAggregateType',
        sh: '_Geometry'
      }, {
        en: '_Curve',
        ti: '.AbstractCurveType',
        sh: '_GeometricPrimitive'
      }, {
        en: 'coordinateOperationName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: '_Coverage',
        ti: '.AbstractCoverageType',
        sh: '_Feature'
      }, {
        en: '_TimeComplex',
        ti: '.AbstractTimeComplexType',
        sh: '_TimeObject'
      }, {
        en: 'GeometricComplex',
        ti: '.GeometricComplexType',
        sh: '_Geometry'
      }, {
        en: 'srsName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'csName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: '_Ring',
        ti: '.AbstractRingType',
        sh: '_Geometry'
      }, {
        en: '_TimePrimitive',
        ti: '.AbstractTimePrimitiveType',
        sh: '_TimeObject'
      }, {
        en: 'methodName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'multiCurveDomain',
        ti: '.MultiCurveDomainType',
        sh: 'domainSet'
      }, {
        en: 'gridDomain',
        ti: '.GridDomainType',
        sh: 'domainSet'
      }, {
        en: 'groupName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'multiSurfaceDomain',
        ti: '.MultiSurfaceDomainType',
        sh: 'domainSet'
      }, {
        en: 'ValueArray',
        ti: '.ValueArrayType',
        sh: 'CompositeValue'
      }, {
        en: '_GML',
        ti: '.AbstractGMLType',
        sh: '_Object'
      }, {
        en: '_MetaData',
        ti: '.AbstractMetaDataType',
        sh: '_Object'
      }, {
        en: '_TimeGeometricPrimitive',
        ti: '.AbstractTimeGeometricPrimitiveType',
        sh: '_TimePrimitive'
      }, {
        en: '_FeatureCollection',
        ti: '.AbstractFeatureCollectionType',
        sh: '_Feature'
      }, {
        en: 'parameterName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'rectifiedGridDomain',
        ti: '.RectifiedGridDomainType',
        sh: 'domainSet'
      }, {
        en: 'datumName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: '_Surface',
        ti: '.AbstractSurfaceType',
        sh: '_GeometricPrimitive'
      }, {
        en: 'FeatureCollection',
        ti: '.FeatureCollectionType',
        sh: '_Feature'
      }, {
        en: 'multiPointDomain',
        ti: '.MultiPointDomainType',
        sh: 'domainSet'
      }, {
        en: '_TimeTopologyPrimitive',
        ti: '.AbstractTimeTopologyPrimitiveType',
        sh: '_TimePrimitive'
      }, {
        en: '_Solid',
        ti: '.AbstractSolidType',
        sh: '_GeometricPrimitive'
      }, {
        en: 'EnvelopeWithTimePeriod',
        ti: '.EnvelopeWithTimePeriodType',
        sh: 'Envelope'
      }, {
        en: 'meridianName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: '_GeometricPrimitive',
        ti: '.AbstractGeometricPrimitiveType',
        sh: '_Geometry'
      }, {
        en: 'ellipsoidName',
        ti: '.CodeType',
        sh: 'name'
      }]
  };
  return {
    GML_3_1_1: GML_3_1_1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Filter_1_1_0_GML_3_1_1_Module_Factory);
}
else {
  var Filter_1_1_0_GML_3_1_1_Module = Filter_1_1_0_GML_3_1_1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_3_1_1 = Filter_1_1_0_GML_3_1_1_Module.GML_3_1_1;
  }
  else {
    var GML_3_1_1 = Filter_1_1_0_GML_3_1_1_Module.GML_3_1_1;
  }
}