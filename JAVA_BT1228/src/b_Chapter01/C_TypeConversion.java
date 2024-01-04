package b_Chapter01;

// 자바 형 변환
// : 하나의 타입을 다른 타입으로 바꾸는 것

// 자료형의 크기에 따른 형 변환 규칙
// byte(1) < short(2) < int(4) < long(8) < float(4) < double(8)
// : 메모리 설계 상 정수 타입보다 실수 타입이 더 크다

public class C_TypeConversion {

	public static void main(String[] args) {
		// 1. 자동 형 변환 (묵시적)
		// : 크기가 큰 자료형으로의 변환
		byte small_bowl = 10; // 작은 그릇
		int big_bowl = 10000; // 큰 그릇
		
//		작은 범위의 타입을 큰 타입으로 넣을 때는
//		자동으로 형 변환을 컴파일러가 수행
		big_bowl = small_bowl;
		
		byte a = 32; // 1 byte 자료형
		short b = a; // 1 byte 자료형에 저장된 값을 2 byte 로 변환
		int c = b;
		long d = c;
		
		// 2. 강제 형 변환 (명시적)
		// : 크기가 작은 자료형으로의 변환
		int number = 1234;
		float float_number = number; // int보다 float이 더 크다
		
		float flo_number = 3.14F;
//		float이 int보다 크기 때문에 자동 형 변환 X (값 손실 발생)
//		int int_number = flo_number; - Error
		
//		명시적 형 변화 : (작은 변환 자료형) 큰 데이터 값;
		int int_number = (int) flo_number;
		
		int num = 60000;
		byte value = (byte)num;
		
		double dbNum = 12.3456;
		int intNum = (int)dbNum;
		// 실수를 정수로 강제 타입 변환 시 소수점 이하의 데이터가 버려짐
		System.out.println(intNum);
		
//		char 자료형의 형 변환
//		: char 자료형
//		  한 개의 문자 값에 대한 자료형
//		  문자 값을 작은 따옴표로 감싸는 형태
		
//		: char 문자값을 표현하는 형식
//		  - 일반 문자값 사용, 아스키코드값, 유니코드값
		
		char a1 = 'a'; // 일반 문자값
		char a2 = 97; // 아스키코드값
		char a3 = '\u0061'; // 유니코드값
		
		int i1 = 97;
		System.out.println(a1);
		System.out.println(a2);
		System.out.println(a3);
		
		System.out.println(i1);
		
//		byte 자료형을 char 자료형으로 변환
//		: char 자료형에는 음수 표현식 X
//		: byte 의 음수 자료형에 대한 오류를 방지하기 위해 변환 X
		byte byte_type = 10;
//		char char_type = byte_type; - Error
		
//		: short 자료형으로는 변환이 가능 (-32768~32767)
		
		
		
		
		
	}

}